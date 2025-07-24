<?php
use App\Http\Controllers\adminDashboardController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('authenticate', [AuthenticationController::class, 'authenticate']); 


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Define your authenticated routes here
    Route::get('/dashboard',[adminDashboardController::class, 'index']);
    Route::get('/logout', [AuthenticationController::class, 'logout']); 
    
});