<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    /**
     * Login (Authenticate) user and issue a Sanctum token.
     */
    public function authenticate(Request $request)
    {
        // 1) Input validation
        $data = $request->only(['email', 'password']);
        $validator = Validator::make($data, [
            'email'    => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        // 2) Rate‑limit key: email + IP
        $key = 'login-attempts:' . $request->ip() . '|' . $data['email'];
        if (RateLimiter::tooManyAttempts($key, 5)) {
            throw ValidationException::withMessages([
                'email' => ['Too many login attempts. Please try again in ' .
                    RateLimiter::availableIn($key) . ' seconds.'],
            ])->status(429);
        }

        // 3) Attempt authentication
        if (! Auth::attempt($data)) {
            RateLimiter::hit($key, 60); // block for 1 minute after max attempts

            return response()->json([
                'status'  => false,
                'message' => 'Either Email or Password Is incorrect.',
            ], 401);
        }

        // Clear any existing rate‑limit on success
        RateLimiter::clear($key);

        /** @var \App\Models\User $user */
        $user = Auth::user();

        // 4) Issue a new token
        $token = $user
            ->createToken('api-token')
            ->plainTextToken;

        return response()->json([
            'status' => true,
            'data'   => [
                'user'  => [
                    'id'    => $user->id,
                    'name'  => $user->name,
                    'email' => $user->email,
                ],
                'token' => $token,
                'type'  => 'Bearer',
            ],
        ], 200);
    }

    /**
     * Logout user by revoking the current access token.
     * Protected by auth:sanctum middleware.
     */
    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();

        // Revoke only the current token
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => true,
            'message' => 'Logged out successfully.',
        ], 200);
    }
}