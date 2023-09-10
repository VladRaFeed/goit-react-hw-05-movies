import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/movieApi';

const MovieDetails = () => {
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
    <div>
      <h2>{details.title}</h2>
      <img
        src={`http://image.tmdb.org/t/p/w300${details.poster_path}`}
        alt={details.title}
      />
      <p>Rating: {details.vote_average}</p>
      <p>Overview: {details.overview}</p>
      <p>
        Genres:{' '}
        {details.genres && details.genres.map(genre => genre.name).join(', ')}
      </p>
      <Link to="cast">View Cast</Link>
      <Link to="views">View Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
