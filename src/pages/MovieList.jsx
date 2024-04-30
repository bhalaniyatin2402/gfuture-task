import { useMovieListQuery } from "../redux/services/api";

function MovieList() {
  const { data: movieList, isLoading, error } = useMovieListQuery();

  if (isLoading || error) return;

  return (
    <>
      <div className="movie-container">
        {movieList?.results?.map((item) => (
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
            />
            <h3>{item?.original_title}</h3>
            <p>{item?.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
