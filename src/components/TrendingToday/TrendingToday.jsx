import { Link } from 'react-router-dom';

const TrendingToday = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingToday;
