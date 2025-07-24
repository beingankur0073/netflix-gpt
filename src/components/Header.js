import React, { useEffect } from 'react'
import nf from '../utils/nflix.jpg'
import { auth } from '../utils/firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { LOGO } from '../utils/constants.js';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }


   useEffect(()=>{
     const unsubcribe= onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const {uid,email,disPlayName,photoURL} = user;
      dispatch(addUser(
        { uid:uid,
          email:email,
          disPlayName:disPlayName,
          photoURL:photoURL
        })
      );
     navigate("/browse")
  
    } else {
      dispatch(removeUser())
      navigate("/")
    }
  });

    return ()=>unsubcribe();
   },[])




  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
            className='w-44'
            src={LOGO}
            alt="logo"
         />


        { user && (
            <div className='flex p-2'>
               <img 
                 className='w-12 h-12'
                 alt='usericon'
                 src={user?.photoURL}
               />
             <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
            </div>
          )
        }
    </div>
  )
}

export default Header