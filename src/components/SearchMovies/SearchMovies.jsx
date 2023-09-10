import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './SearchMovies.module.css';

const SearchMovies = ({ movies }) => {
  return (
    <ul className={css.movies_list}>
      {movies.map(({ id, title, backdrop_path }) => (
        <li key={id} className={css.movies_item}>
          <Link to={`${id}`} className={css.movie_link}>
            <img
              src={
                backdrop_path === null
                  ? 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'
                  : `http://image.tmdb.org/t/p/w300${backdrop_path}`
              }
              alt={title}
              className={css.movie_img}
            />
            <div className={css.movie_text_wrapper}>
              <p className={css.movie_title}>{title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMovies;

SearchMovies.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
    })
  ),
};
