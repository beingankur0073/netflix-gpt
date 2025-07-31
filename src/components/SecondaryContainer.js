import React, { use } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList.js'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    movies?.nowPlayingMovies && (
    <div className=' bg-black  pl-5' >
      <div className='mt-0 md:-mt-52 md:pl-12 pl-4 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Upcoming Movies"} movies={movies.popularMovies}/>
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      
    </div>

    )
  )
}

export default SecondaryContainer