import { useState, useEffect } from "react";
import { getData } from "../api/api";
import { Link, useParams } from "react-router-dom";
import MovieListItem from "./MovieListItem";
import Styled from "../styles/movielist";
import Loading from "../components/Loading";

function MovieList() {
  const [index, setIndex] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const { idx } = useParams();

  const movePage = async (e) => {
    const moveState = e.target.name;
    if (page === 1 && moveState === "prev") {
      alert("첫 페이지 입니다!");
    } else {
      moveState === "next"
        ? setPage((prev) => prev + 1)
        : setPage((prev) => prev - 1);
    }
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePopular = async () => {
    setLoading(true);
    const response = await getData(index, page);
    const data = response.results;
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    setIndex(idx);
  }, [idx]);

  useEffect(() => {
    if (index) {
      handlePopular();
    }
  }, [index, page]);

  return (
    <>
      {loading ? <Loading /> : null}

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
          <button
            name="prev"
            className={page === 1 ? "dim" : "prev-btn"}
            onClick={movePage}
          />
          <span className="page-num">{page}</span>
          <button name="next" className="next-btn" onClick={movePage} />
        </div>
      </Styled.Container>
    </>
  );
}

export default MovieList;
