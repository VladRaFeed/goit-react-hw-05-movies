import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/movieApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('query') ?? '';

  useEffect(() => {
    getMovies(q);
    console.log(movies);
  }, []);

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
    <section>
      <h2>Search Movies</h2>
      <form onClick={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button>Search</button>
      </form>
    </section>
  );
};

export default Movies;
