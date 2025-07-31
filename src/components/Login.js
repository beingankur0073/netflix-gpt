import React, { useRef, useState } from 'react'
import Header from './Header.js'
import { checkValidateData } from '../utils/validate.js';
import { auth } from '../utils/firebase.js';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { BG_URL, USER_AVATAR } from '../utils/constants.js';


const Login = () => {
    
     const dispatch=useDispatch()

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    
    
   

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick=()=>{
        // Validate the data
      
      const message=checkValidateData(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message) return 
      
      // Sign in /Sign up
      if(!isSignInForm){
        // Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, 
                photoURL: USER_AVATAR,
                })
                .then(() => {
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                     dispatch(addUser(
                       { uid:uid,
                         email:email,
                         displayName:displayName,
                         photoURL:photoURL
                       })
                     );
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
          
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
           
        })
        

        // Akshay89
        // akshay78@gmail.com
        }else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            })
        }         
                
    }
  return (
    <div >
        <Header />

         <div className="fixed -z-10 w-screen h-screen">
                <img 
                  className="w-full h-full object-cover" 
                  src={BG_URL} 
                  alt="logo" 
                />
              </div>


        <form onClick={(e)=>e.preventDefault()} className='md:w-3/12 w-full absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'> 
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
            </h1>

             {!isSignInForm &&  <input 
                ref={name}
                type='text' 
                placeholder='Full Name'
                className='p-2 my-2 w-full bg-gray-700'
            />}

            <input 
                ref={email}
                type='text' 
                placeholder='Email Address'
                className='p-2 my-2 w-full bg-gray-700'
            />
            <input 
                ref={password}
                type='text'
                placeholder='Password'
                className='p-2 my-2 w-full bg-gray-700'

            />

            <p className='text-red-500 font-bold text-lg py-2 '>{errorMessage}</p>

            <button  className='p-4 my-6 bg-red-700 rounded-lg w-full' onClick={handleButtonClick}>
                {isSignInForm? "Sign In":"Sign Up"}
            </button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix ? Sign Up Now":"Already Registered ? Sign In Now" }
            </p>

        </form>


    </div>
  )
}

export default Login