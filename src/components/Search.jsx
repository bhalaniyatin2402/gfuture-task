import { headers } from "../redux/services/api";

function Search({ search, setSearch }) {
  async function handleSearchQuery() {
    // const res = await useSearchMoviesMutation(search);
    const response = await fetch(
      `https://api.themoviedb.org/3//search/multi?query=${search}&page=${1}`,
      {
        headers,
      }
    );
    const result = await response?.json();
    console.log(result);
    // if (res?.data) {
    //   console.log(res?.data);
    // }
    // if (res?.error) {
    //   console.log(res?.error);
    // }
  }

  return (
    <>
      <div className="header">
        <input
          type="text"
          value={search}
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearchQuery}>Search</button>
      </div>
    </>
  );
}

export default Search;
