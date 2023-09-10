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
    `/search/movie?query=${query}&include_adult=false&language=${LANGUAGE}&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?language=${LANGUAGE}&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCasts = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?language=${LANGUAGE}&api_key=${API_KEY}`
  );
  return data;
};
