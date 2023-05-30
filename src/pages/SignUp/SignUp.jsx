import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {

  const navigate = useNavigate(); 
  const { emailSignUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    emailSignUp(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      if (user)
      {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registration Successful',
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/')
      }
    })
      .catch(error => {
      console.log(error)
    })
  }


    // console.log(watch('example')); 

  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   console.log(name,email, password);
  // };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up </title>
      </Helmet>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row justify-center'>
          <div className='text-center md:w-1/2  lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card  w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  {...register('name', { required: true })}
                  name='name'
                  placeholder='name'
                  className='input input-bordered'
                />
                {errors.name && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  {...register('email', { required: true })}
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                />
                {errors.email && (
                  <span className='text-red-600'>This field is required</span>
                )}
              </div>
              <div className='form-control '>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                  })}
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                />
                {errors.password?.type === 'required' && (
                  <span className='text-red-600'>This field is required</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className='text-red-600'>
                    password must be 6 character
                  </span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className='text-red-600'>
                    password up to must be 20 character
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className='text-red-600'>
                    password must have one uppercase,one lowercase,one special,
                    one number character
                  </span>
                )}
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Sign Up</button>
              </div>
              <div>
                <p>
                  <small>
                    Already SingUp?
                    <span>
                      <Link className='text-blue-500' to='/login'>
                        please Login
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

export default SignUp;
