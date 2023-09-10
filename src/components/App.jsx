import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const ViewCast = lazy(() => import('../components/ViewCast/ViewCast'));
const ViewReviews = lazy(() => import('../components/ViewReviews/ViewReviews'));

export const App = () => {
  return (
    <div>
      <section>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<ViewCast />} />
              <Route path="reviews" element={<ViewReviews />} />
            </Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
};
