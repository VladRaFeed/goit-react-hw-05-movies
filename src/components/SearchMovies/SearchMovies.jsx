import { Link } from 'react-router-dom';

const SearchMovies = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(({ id, title, backdrop_path }) => (
        <li key={id}>
          <Link to={`${id}`}>
            <img
              src={
                backdrop_path === null
                  ? 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'
                  : `http://image.tmdb.org/t/p/w300${backdrop_path}`
              }
              alt={title}
            />
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMovies;
