import { useState } from "react";
import Navbar from "./Navbar.jsx";
import MovieList from "./MovieList";
import moviesData from "./movies.js"; // import movie data
import './App.css';


export default function App() {
  const [movies] = useState(moviesData);

  const [feedback, setFeedback] = useState({
    movieId: "",   // correct key
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value })); //  merge state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback); //  logs correct data
    alert(`Feedback for movie ID ${feedback.movieId}: ${feedback.rating}`);
    setFeedback({ movieId: "", rating: "" });
  };

  return (
    <>
      <Navbar count={movies.length} />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Movie App</h1>
          <p>Discover your favorite movies and leave feedback!</p>
        </div>
      </section>

      <MovieList movies={movies} />

      <section className="feedback">
        <h2>Leave Feedback</h2>
        <form onSubmit={handleSubmit}>
          <select
            name="movieId"
            value={feedback.movieId}
            onChange={handleChange}
            required
          >
            <option value="">Select a movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="rating"
            value={feedback.rating}
            placeholder="Your rating (0-10)"
            min="0"
            max="10"
            step="0.1"
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}