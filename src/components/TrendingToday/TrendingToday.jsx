import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './TrendingToday.module.css';

const TrendingToday = ({ data }) => {
  const location = useLocation();
  return (
    <ul className={css.trending_list}>
      {data.map(({ id, title, poster_path }) => (
        <li key={id} className={css.list_item}>
          <Link
            to={`movies/${id}`}
            state={{ from: location }}
            className={css.item_link}
          >
            <img
              src={`http://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
              className={css.trending_img}
            />
            <div className={css.text_wrapper}>
              <p className={css.item_text}>{title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingToday;

TrendingToday.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
