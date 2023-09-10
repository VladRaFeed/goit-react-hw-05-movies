import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCasts } from 'services/movieApi';
import css from './ViewCast.module.css';

const ViewCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getMovieCasts(movieId);
        console.log(result);
        setCast(result.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  // 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'
  // http://image.tmdb.org/t/p/w200${profile_path}
  return (
    <div>
      <ul className={css.cast_list}>
        {cast.map(({ name, character, profile_path, id }) => (
          <li key={id} className={css.cast_item}>
            <img
              src={
                profile_path === null
                  ? 'https://i.pinimg.com/564x/3a/67/19/3a67194f5897030237d83289372cf684.jpg'
                  : `http://image.tmdb.org/t/p/w200${profile_path}`
              }
              alt={name}
            />
            <h4>{name}</h4>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCast;
