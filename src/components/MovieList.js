import MovieListItem from "./MovieListItem";

function MovieList({ items }) {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MovieListItem item={item}></MovieListItem>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;
