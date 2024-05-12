function MovieListItem({ item }) {
  return (
    <>
      <h1>{item.original_title}</h1>
      <span>⭐</span>
      <span>{item.vote_average}</span>
    </>
  );
}

export default MovieListItem;
