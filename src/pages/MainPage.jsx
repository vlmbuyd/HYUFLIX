import { useEffect, useState } from "react";
import { getSearch } from "../api/api";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import Styled from "../styles/mainpage";
import starIcon from "../assets/star.png";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedValue) {
        setIsLoading(true);
        const response = await getSearch(debouncedValue);
        setsearchData(response.results);
        console.log(response.results);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Styled.Container>
        <h1 className="welcome">환영합니다</h1>
        <h2>🎬Find your movies!</h2>
        <div className="input-container">
          <form onSubmit={handleSubmit} action="GET">
            <input
              className="search-input"
              value={inputValue}
              onChange={handleInput}
            />
            <button className="submit-btn" type="submit" />
          </form>
        </div>
        {debouncedValue && (
          <ul className="search-container">
            {isLoading ? (
              <span className="loading">데이터를 받아오는 중입니다..</span>
            ) : (
              searchData.map((item) => (
                <Link to={`movie/${item.id}`}>
                  <li key={item.id}>
                    <Styled.Overview>{item.overview}</Styled.Overview>
                    <img
                      className="content-img"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt="movie-image"
                    />
                    <div className="description">
                      <h3>{item.original_title}</h3>
                      <div className="rating">
                        <img src={starIcon} alt="" />
                        <span>{item.vote_average}</span>
                      </div>
                    </div>
                  </li>
                </Link>
              ))
            )}
          </ul>
        )}
      </Styled.Container>
    </>
  );
}

export default MainPage;
