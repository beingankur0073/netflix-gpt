import React, { useEffect } from 'react'
import nf from '../utils/nflix.jpg'
import { auth } from '../utils/firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { changeLanguage } from '../utils/configSlice.js';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
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

const handleGptSearchClick=()=>{
  // toggle gpt search
  dispatch(toggleGptSearchView())
}
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}


  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between ' >
        <img 
            className='w-44 mx-auto md:mx-0'
            src={LOGO}
            alt="logo"
         />


        { user && (
            <div className='flex p-2 justify-between'>

              {showGptSearch &&
              <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map((lang)=>(
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
              }
              <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg'

               onClick={handleGptSearchClick}
              >{showGptSearch?"Home Page" :"Gpt Search"}</button>
               <img 
                 className='hidden md:block w-12 h-12'
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