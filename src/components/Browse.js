
import Header from './Header.js'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../hooks/usePopularMovies.js';

const Browse = () => {
  
 
   useNowPlayingMovies();
   usePopularMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
          MainContainer
            -VideoContainer
            -VideoTitle
          SecondaryContainer
            -MovieList*n
              -cards*n  
       */}
    </div>
  )
}

export default Browse