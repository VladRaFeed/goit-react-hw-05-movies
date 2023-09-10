import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMovieById(movieId);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <div className={css.movieDetails_wrapper}>
      <Link to={backLink.current} className={css.back_btn}>
        Go back
      </Link>
      <h2 className={css.movieDetails_title}>{details.title}</h2>
      <div className={css.details_wrapper}>
        <img
          src={`http://image.tmdb.org/t/p/w300${details.poster_path}`}
          alt={details.title}
        />
        <div className={css.details_text_wrapper}>
          <p className={css.details_text}>Rating: {details.vote_average}</p>
          <p className={css.details_text}>Overview: {details.overview}</p>
          <p className={css.details_text}>
            Genres:{' '}
            {details.genres &&
              details.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
      <div>
        <ul className={css.details_btns_wrapper}>
          <li>
            <Link to="cast" className={css.details_btn}>
              View Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.details_btn}>
              View Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
