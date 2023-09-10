import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieApi';
import css from './ViewReviews.module.css';

const ViewReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getMovieReviews(movieId);
        console.log(result.results);
        setReviews(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <h1 className={css.wrong_message}>
          We dont have any reviews for this movie
        </h1>
      ) : (
        <ul className={css.reviews_list}>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3 className={css.reviews_name}>{author}</h3>
              <p className={css.reviews_text}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewReviews;
