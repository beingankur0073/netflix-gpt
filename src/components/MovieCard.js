
import { IMG_CDN_URL } from '../utils/constants.js'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null; // Handle case where posterPath is not available
  return (
    <div className='md:w-40 w-30 pr-4'>
        <img  alt="Movie Card" 
           src={IMG_CDN_URL+posterPath}
         />
    </div>
  )
}

export default MovieCard