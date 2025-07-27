import React, { useRef } from 'react'
import lang from '../utils/languageConstants.js'
import { useDispatch, useSelector } from 'react-redux'

import { API_OPTIONS, buildRequestBodyJSON, PERPLEXITY_KEY, PERPLEXITY_URL } from '../utils/constants.js'
import { addGptMovieResult } from '../utils/gptSlice.js'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey=useSelector((store)=>store.config.lang)
  const searchtext=useRef(null);


  const searchMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&Language=en-US&page=1",API_OPTIONS);
    const json=await data.json();
    return json.results;
  
  }

  const handleGptSearchClick = async () => {
  // Get user's search text
  const userInput = searchtext.current.value;
  console.log(userInput);

  // Compose the prompt as per your requirements
  const getQuery = 
    "Act as a Movie Reccommendation system and suggest movies for the query: " +
    userInput +
    ". only give me names of 5 movies, comma separated like the Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PERPLEXITY_KEY}`,
      'Content-Type': 'application/json'
    },
    body: buildRequestBodyJSON(getQuery)
  };

  
    const res = await fetch(PERPLEXITY_URL, options);
    const perplexityResult = await res.json();
    if(!perplexityResult.choices){
      // TODO : Wtite Error Handling
    }

    console.log(perplexityResult.choices?.[0].message?.content);


    // Andaz Apna Apna, Hera Pheri, Chup Chupke, Jaane Bhi Do Yaaro,Padosan
    const getMovies= perplexityResult.choices?.[0].message?.content.split(',');
    // ["Andaz Apna Apna", "Hera Pheri", "Chup Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API
    const promiseArray=getMovies.map((movie) => searchMovieTMDB(movie))
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults=await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:getMovies,movieResults:tmdbResults}))
};




  return (
    <div className='md:pt-[10%] pt-[35%] flex justify-center'>
    <form 
    className="md:w-1/2 w-full bg-black grid grid-cols-12"
    onSubmit={(e)=>e.preventDefault()}
    >
        <input type='text' 
        ref={searchtext}
        className='p-4 m-4 col-span-9' 
        placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}
        >{lang[langKey].search}</button>
    </form>
    
    </div>
  )
}

export default GptSearchBar