import TrendingToday from 'components/TrendingToday/TrendingToday';
import { useEffect, useState } from 'react';
import { getTrending } from 'services/movieApi';

const Home = () => {
  const [data, setData] = useState(['']);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        setLoader(true);
        const result = await getTrending();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      {data.length > 0 ? <h1>Err</h1> : <TrendingToday data={data.results} />}
    </div>
  );
};

export default Home;
