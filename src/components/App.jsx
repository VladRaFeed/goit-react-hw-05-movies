import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { NavLink, Route, Router, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </section>
    </header>
  );
};
