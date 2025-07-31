import React from 'react'
import GptSearchBar from './GptSearchBar.js'
import GptMovieSuggestion from './GptMovieSuggestion.js'
import { BG_URL } from '../utils/constants.js'

const GptSearch = () => {
  return (
    <>
    
        <div className="fixed -z-10 w-screen h-screen">
        <img 
          className="w-full h-full object-cover" 
          src={BG_URL} 
          alt="logo" 
        />
      </div>
        <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>

        </div>
  
    </>
  )
}

export default GptSearch