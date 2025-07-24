import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice.js";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";

const usePopularMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const getNowPlayingMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS);
    
          const json=await data.json();
         
          dispatch(addPopularMovies(json.results))
    
      }
    
      useEffect(()=>{
        getNowPlayingMovies();
      },[])
}

export default usePopularMovies;