import styled from "styled-components";
import { Link } from "react-router-dom";
import MovieListItem from "./MovieListItem";
import Styled from "../styles/movielist";

function MovieList({ items }) {
  return (
    <Styled.Container>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`movie/${item.id}`}>
                <MovieListItem item={item}></MovieListItem>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="pagination">
        <button className="prev-btn" />
        {/* <span></span> */}
        <button className="next-btn" />
      </div>
    </Styled.Container>
  );
}

export default MovieList;
