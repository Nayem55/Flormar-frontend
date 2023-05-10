import React, { useEffect } from 'react';
import './Signup.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()

      useEffect(()=>{
        if(user){
            navigate('/')
        }
      },[user])

      if(loading){
        return 
      }

      const handleSignup=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password)
      }


    return (
        <div className='2xl:w-[65%] md:w-[75%] mx-auto mb-20'>
            <div className='my-10'>
                <p className='text-[12px] font-semibold'>Home<FontAwesomeIcon className='mx-2' icon={faCaretRight}></FontAwesomeIcon>Create Account</p>
                <p className='text-xl my-4 font-bold'>CREATE AN ACCOUNT</p>
                <p className='text-[12px] font-semibold'>Sign up for a free account at Fragrance</p>
            </div>
            <form onSubmit={handleSignup}>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>First Name</p>
                    <input type="text" name='first name' className='border px-3 border-secondary border-opacity-50 w-[30vw] h-[32px]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>LAST NAME</p>
                    <input type="text" name='last name' className='border px-3 border-secondary border-opacity-50 w-[30vw] h-[32px]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>YOUR EMAIL ADDRESS</p>
                    <input type="email" name='email' required className='border px-3 border-secondary border-opacity-50 w-[30vw] h-[32px]' />
                </div>
                <div className='mb-4'>
                    <p className='text-[14px] font-semibold mb-2'>YOUR PASSWORD</p>
                    <input type="password" name='password' required className='border px-3 border-secondary border-opacity-50 w-[30vw] h-[32px]' />
                </div>
                <p className='text-error mb-3 font-bold'>{error?.message}</p>
                <input type='submit' value="CREATE AN ACCOUNT" className='w-[280px] bg-secondary text-primary px-4 py-2 text-sm font-bold cursor-pointer'/>
                <p className='text-[14px] font-semibold my-4'>Already have an account ? <Link to="/login" className='text-accent font-bold'>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;