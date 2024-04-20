import {Link} from 'react-router-dom'
import {Label, TextInput, Button} from 'flowbite-react'

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to='/'
            className='font-bold dark:text-white text-4xl'
          >
            <span className = 'px-2 py-1 bg-gradient-to-r from-green-500  to-blue-500  rounded-lg text-white'>Sinclair's
            </span>Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password 
            or with Google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              />
            </div>
            <Button outline gradientDuoTone='purpleToBlue' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp