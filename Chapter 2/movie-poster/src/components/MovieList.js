function MovieList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <MovieListItem item={item}></MovieListItem>
          </li>
        );
      })}
    </ul>
  );
}

function MovieListItem({ item }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_title}
      ></img>
      <h3>{item.original_title}</h3>
    </div>
  );
}

export default MovieList;
