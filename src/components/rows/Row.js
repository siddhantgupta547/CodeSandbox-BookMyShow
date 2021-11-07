import { useState } from 'react';
import YouTube from 'react-youtube';

import MovieCard from '../movieCard/MovieCard';

const Row = ({ movies }) => {
  const [trailerId, settrailerId] = useState('');

  const handleClick = (e, movie) => {
    let url = movie.TrailerURL;
    let start = url.indexOf('=') + 1;
    let end = url.indexOf('&');
    end = end > 0 ? end : url.length;
    let v = url.slice(start, end);
    if (v === trailerId) {
      settrailerId('');
    } else {
      settrailerId(v);
    }
  };

  const opts = {
    height: '390',
    width: '940',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    <div className="row">
      {trailerId && (
        <div className="trailer-dets">
          <div className="youtube">
            <YouTube videoId={trailerId} opts={opts} />
          </div>
          <div className="dets"></div>
          <span>Siddhant</span>
        </div>
      )}
      {movies.map((movie) => {
        return <MovieCard movie={movie} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Row;
