
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer.js';

const VideoBackgound = ({movieId}) => {
  const trailerVideo=useSelector((state) => state.movies?.trailerVideo);
  console.log("https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1")
  useMovieTrailer(movieId);
  return (
     
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video '
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; 
      autoplay; clipboard-write; 
      encrypted-media; gyroscope; 
      picture-in-picture; web-share" 
      >

      </iframe>
    </div>
  )
}

export default VideoBackgound