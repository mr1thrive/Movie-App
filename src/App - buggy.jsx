import { useState } from "react";
import Navbar from "./Navbar.jsx";
import MovieList from "./MovieList";
import moviesData from "./movies.js"; // import movie data
import './App.css';

export default function App() {
  const [movies, setMovies] = useState(moviesData); // all good

  const [feedback, setFeedback] = useState({
    movie: "",    // incorrect key, should be movieId
    rating: "",  
  });

  const handleChange = (e) => {
    setFeedback(e.target.value); // ❌ overwriting state instead of merging
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback.rating, feedback.movie); // may be undefined
  };

  return (
    <>
      <Navbar count={movies.length} />

      <section className="hero">
        <h1>Welcome to the Movie App</h1>
        <p>Discover movies!</p>
      </section>

      <MovieList movies={movies} />

      <section className="feedback">
        <h2>Leave Feedback</h2>
        <form onSubmit={handleSubmit}>
          <select name="movie" value={feedback.movie} onChange={handleChange}>
            {movies.map((movie) => (
              <option value={movie.title}>{movie.title}</option> // ❌ missing key
            ))}
          </select>
          <input
            type="number"
            value={feedback.rating}
            placeholder="Rating"
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}