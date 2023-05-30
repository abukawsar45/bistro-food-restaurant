
import { useContext, useEffect, useRef, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { emailSignIn } = useContext(AuthContext);
  console.log(emailSignIn)
  const captchaRef = useRef(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    emailSignIn(email, password)
      .then(result => {
        const user = result.user;
        if (user)
        {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Login successful',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, {replace: true})
        }
      })
      .catch(error => {
      console.log(error.message);
    })
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [mode, setMode] = useState(true);
  const handleValidateCaptha = () => {
    const value = captchaRef.current.value;
    console.log(value);
    if (validateCaptcha(value)) {
      setMode(false);
    } else {
      return setMode(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign In </title>
      </Helmet>
      <div className=' min-h-screen bg-base-200'>
        <div className='hero-content grid grid-cols-1 md:grid-cols-2'>
          <div className=' text-center  lg:text-left'>
            <h1 className='text-5xl text-center font-bold'>Login now!</h1>
          </div>
          <div className='   shadow-2xl text-center w-full md:w-3/4 bg-base-100'>
            <form onSubmit={handleLogin} className='card-body'>
              <div className='form-control '>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  name='email'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control '>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control '>
                <label className='label'>
                  <LoadCanvasTemplate />
                </label>
                <input
                  type='text'
                  name='captha'
                  ref={captchaRef}
                  placeholder='type the captha'
                  className='input input-bordered'
                />
                <button
                  onClick={handleValidateCaptha}
                  className='mt-2 btn btn-outline btn-xs'
                >
                  validate
                </button>
              </div>
              <div className='form-control mt-6'>
                <input
                  type='submit'
                  className='btn btn-primary '
                  disabled={mode}
                  value='Login'
                />
              </div>
              <div>
                <p>
                  <small>
                    No Accout?
                    <span>
                      <Link className='text-blue-500' to='/signup'>
                        Create a new
                      </Link>{' '}
                    </span>{' '}
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
