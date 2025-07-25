import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";

const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
     // fetch trialer video and updating store 
      const getMovieVideos=async () => {
        
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        const json=await data.json();
        const filteredData=json.results.filter((video) => video.type === 'Trailer');
        const trailer=filteredData.length ? filteredData[0] : json.results[0];
     
        dispatch(addTrailerVideo(trailer));
      }
    
      useEffect(() => {
        getMovieVideos();
      },[])
    }


export default useMovieTrailer;