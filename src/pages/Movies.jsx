import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/movieApi';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(['']);
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('query') ?? '';

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await getMovieByQuery(q);
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovies = async query => {
    try {
      const result = await getMovieByQuery(query);
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = e => {
    setSearchParams({ query: e.currentTarget.value });
  };

  return (
    <div className={css.search_wrapper}>
      <h2 className={css.search_title}>Search Movies</h2>
      <form onClick={handleSubmit} className={css.search_form}>
        <input
          type="text"
          placeholder="type movie"
          onChange={handleInputChange}
          className={css.search_input}
        />
        <button className={css.search_btn}>Search</button>
      </form>
      {movies.length > 0 ? (
        <p className={css.wrong_msg}>pls, type a request</p>
      ) : (
        <SearchMovies movies={movies.results} />
      )}
    </div>
  );
};

export default Movies;
