import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";

const usePopularMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const getNowPlayingMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS);
    
          const json=await data.json();
         
          dispatch(addPopularMovies(json.results))
    
      }
    
      useEffect(()=>{
       !popularMovies && getNowPlayingMovies();
      },[])
}

export default usePopularMovies;