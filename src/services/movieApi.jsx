import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'faa21f1b1a160eb816f363bca62843cf';
const LANGUAGE = 'language=en-US';

// axios.defaults.params = {
//   key: 'faa21f1b1a160eb816f363bca62843cf',
//   language: 'language=en-US',
// };

export const getTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&${LANGUAGE}&page=1`
  );
  return data;
};
