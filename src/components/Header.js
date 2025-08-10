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
import img from "../utils/logo.png"

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
  <div className="fixed top-0 left-0 px-8 py-3 w-full bg-gradient-to-b from-black z-10 flex items-center justify-between">
    {/* Logo */}
    <img
      className="w-32 md:w-44 pt-5"
      src={img}
      alt="logo"
    />

    {user && (
      <div className="flex items-center gap-4">
        {showGptSearch && (
          <select
            className="p-2 bg-gray-900 text-white rounded-md outline-none"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Home Page" : "Gpt Search"}
        </button>

        <img
          className="w-10 h-10 rounded-full object-cover hidden md:block"
          alt="usericon"
          src={user?.photoURL}
        />

        <button
          onClick={handleSignOut}
          className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
);
}

export default Header