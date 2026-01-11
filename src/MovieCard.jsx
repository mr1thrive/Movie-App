export default function MovieCard({ movie }) {
  return (
    <div className="card movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <strong>⭐ {movie.rating}</strong>
    </div>
  );
}
