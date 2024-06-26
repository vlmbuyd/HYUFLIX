import { useState } from "react";
import { getSearch } from "../api/api";
import Styled from "../styles/mainpage";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setsearchData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = async (e) => {
    setInputValue(e.target.value);
    const response = await getSearch(e.target.value);
    setsearchData(response.results);
    console.log(searchData);
  };

  return (
    <>
      <Styled.Welcome>환영합니다</Styled.Welcome>
      <Styled.Container>
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
        {inputValue && (
          <ul className="search-container">
            {searchData.map((item) => {
              return (
                <li>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="movie-image"
                  />
                  <div className="description">
                    <h1>{item.original_title}</h1>
                    <span>{item.vote_average}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Styled.Container>
    </>
  );
}

export default MainPage;
