import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Label, TextInput, Button, Spinner } from 'flowbite-react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill out all the fields.');
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log('Sign-up response:', data);
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white'>
              Sinclair's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button outline
              gradientDuoTone='purpleToBlue'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <div className='mt-5 text-red-500'>{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
