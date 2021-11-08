import { useState } from 'react';
import YouTube from 'react-youtube';

import MovieCard from '../movieCard/MovieCard';
import './Row.styles.scss';

const Row = ({ movies, id }) => {
  const [trailerId, settrailerId] = useState('');
  const [clickedMovie, setclickedMovie] = useState('');

  const handleClick = (e, movie) => {
    let url = movie.TrailerURL;
    let start = url.indexOf('=') + 1;
    let end = url.indexOf('&');
    end = end > 0 ? end : url.length;
    let v = url.slice(start, end);
    console.log(e);
    if (v === trailerId) {
      settrailerId('');
      setclickedMovie('');
    } else {
      settrailerId(v);
      setclickedMovie(movie);
    }
  };

  const opts = {
    height: '390',
    width: '690',
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
          <div className="dets">
            <h1>{clickedMovie.EventTitle}</h1>
            <p>{clickedMovie.EventGenre}</p>
            <p>{clickedMovie.ShowDate}</p>
          </div>
        </div>
      )}
      {movies.map((movie) => {
        //console.log(movie, 'movie', id);
        return <MovieCard movie={movie} handleClick={handleClick} />;
      })}
    </div>
  );
};

export default Row;
