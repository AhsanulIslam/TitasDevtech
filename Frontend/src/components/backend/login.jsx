import React from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submit
  const onSubmit = async (data) => {
    console.log('Form Data:', data);

  try {
  const response = await fetch('http://localhost:8000/api/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log('Login Result:', result); // Debug

  if (result.status === false) {
    toast.error(result.message);
  } else {
    const userInfo = {
      id: result.data.id, // <-- adjust this
      token: result.data.token // <-- adjust this
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // console.log('Saved to localStorage:', localStorage.getItem('userInfo'));

    navigate('/admin/dashboard');
  }
} catch (err) {
  console.error('Login Error:', err);
  toast.error('Login failed. Please try again.');
}
  }

    //   if (response.ok) {
    //     alert('Login successful');
    //     console.log(result);

    //     // Optionally store token in localStorage
    //     localStorage.setItem('authToken', result.data.token);
    //   } else {
    //     alert(result.message || 'Login failed');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   alert('Something went wrong');
    // }
//   };

  return (
    <>
      <Header />
      <main>
        <div className='container my-5 d-flex justify-content-center align-items-center'>
          <div className='login-form my-5'>
            <div className='card border-0 shadow-lg'>
              <div className='card-body p-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4 className='mb-3'>Login Here</h4>

                  {/* Email Field */}
                  <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                            type='email'
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder='Email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email format',
                                },
                            })}
                            />
                            {errors.email && (
                            <div className='invalid-feedback'>{errors.email.message}</div>
                            )}
                  </div>

                  {/* Password Field */}
                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                            type='password'
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder='Password'
                            {...register('password', {
                                required: 'Password is required', minLength: {value: 8, message: 'Password must be at least 8 characters',
                                 maxLength: {value: 20, message: 'Password cannot exceed 20 characters' },}
                            })}
                            />
                            {errors.password && (
                            <div className='invalid-feedback'>{errors.password.message}</div>
                            )}

                          <button type='submit' className='btn btn-primary'> Login  </button>
                    </div>
    
                    {/* Remember Me Checkbox */}    
                    <div className='form-check mb-3'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='rememberMe'
                        {...register('rememberMe')}
                      />
                      
                      <label className='form-check-label' htmlFor='rememberMe'>
                        Remember Me
                      </label>
                    </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;