import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
  const [email, setEmail] = useState("")


  function onChange(e){
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      // Check if the email is valid before sending the reset email
      if (!isValidEmail(email)) {
        toast.error("Invalid email address")
        return;
      }
      await sendPasswordResetEmail(auth, email)      
      toast.success("Email sent for reset password")
    } catch (error) {
      toast.error("Could not send link for password reset")
    }
  }
  function isValidEmail(email) {
    // Use a regular expression to validate the email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot/Reset Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 '>
          <img 
            className='w-full rounded-2xl'
            src="/signin.jpg" alt="key" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
              <input 
              className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              type="email" 
              id='email'
              value={email} 
              onChange={onChange}
              placeholder='Email'
              />
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6 '>Don't have an account?
                <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
              </p>
              <p>
                <Link to="/sign-in"
                className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1'
                >Sign in instead</Link>
              </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900'  type='submit'>Send Reset Password</button>
            <div className='flex 
                    items-center my-4
                     before:border-t 
                     before:flex-1 
                     before:border-gray-300
                     after:border-t 
                     after:flex-1 
                     after:border-gray-300
                     '>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}
