import { useState } from "react";
import Search from "../components/Search";
import MovieList from "./MovieList";

function Home() {
  const [search, setSearch] = useState();
  const [movieList, setMovieList] = useState([])

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <br />
      <MovieList />
    </>
  );
}

export default Home;
