import CardDisplay from "./CardDisplay";

function MovieCard({ movieList = [] }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movieList.map((movie) => (
          <CardDisplay
            title={movie.Title}
            key={movie.imdbID}
            poster={movie.Poster}
            year={movie.Year}
            type={movie.Type}
          />
        ))}
      </div>
    </>
  );
}
export default MovieCard;
