import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle.js';
import VideoBackgound from './VideoBackgound.js';

const MainContainer = () => {
   const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movies) return;

   const mainMovie=movies[0];
   

   const {original_title, overview,id} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackgound movieId={id}/>
    </div>
  )
}

export default MainContainer