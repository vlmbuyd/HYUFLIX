import { useState } from "react";
import Styled from "../styles/mainpage";

function MainPage() {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Styled.Welcome>환영합니다</Styled.Welcome>
      <Styled.Container>
        <h2>🎬Find your movies!</h2>
        <div className="search-container">
          <form onSubmit={handleSubmit} action="GET">
            <input className="search-input" onChange={handleInput} />
            <button className="submit-btn" type="submit" />
          </form>
        </div>
      </Styled.Container>
    </>
  );
}

export default MainPage;
