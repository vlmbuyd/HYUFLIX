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
        <div className="search-container">
          <form onSubmit={handleSubmit} action="GET">
            <input
              className="search-input"
              value={inputValue}
              onChange={handleInput}
            />
            <button className="submit-btn" type="submit" />
          </form>
        </div>
        <ul className="search-container">
          {searchData.map((item) => {
            return <li>{item.original_title}</li>;
          })}
        </ul>
      </Styled.Container>
    </>
  );
}

export default MainPage;
