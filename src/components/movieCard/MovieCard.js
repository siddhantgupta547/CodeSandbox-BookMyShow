import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './MovieCard.styles.scss';

const MovieCard = ({ movie, handleClick }) => {
  //console.log('moviecard', movie);
  return (
    <div className="movie">
      <div
        className="movie-card"
        id={movie.EventCode}
        key={movie.EventCode}
        onClick={(e) => handleClick(e, movie)}
      >
        <LazyLoadImage
          src={`https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/medium/${movie.EventImageCode}.jpg`}
          alt={movie.EventTitle}
          onError={(event) =>
            (event.target.src =
              'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/medium/viswadarshanam2019-et00096880-19-02-2019-12-54-36.jpg')
          }
          effect="blur"
          delayTime={300}
        />
        <span>
          {movie.EventTitle.length > 18
            ? movie.EventTitle.slice(0, 15) + '...'
            : movie.EventTitle}
        </span>
        <div className="movie-overlay">
          <div className="overlay-date">{movie.ShowDate.split(',')[0]}</div>
          <div className="overlay-play-button">
            <i className="fas fa-play" />
          </div>
          <div className="overlay-rating">
            <p className="rating">
              <i className="fas fa-thumbs-up "></i>
              {movie.wtsPerc} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
