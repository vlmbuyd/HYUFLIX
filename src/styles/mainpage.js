import styled from "styled-components";
import searchIcon from "../assets/search.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: auto; */
  /* overflow: hidden; */
  background-color: #1f2047;

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30vh;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    font-size: 25px;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
    color: white;
  }

  .input-container {
    position: relative;
    margin-bottom: 50px;

    form {
      width: 350px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .search-input {
      width: 300px;
      height: 35px;
      border: none;
      border-radius: 50px;
    }

    .submit-btn {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      background-color: #e0ba13;
      background-image: url(${searchIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18px 18px;
    }
  }

  .search-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 70%;
    max-height: 500px;
    padding: 20px 40px;
    overflow: auto;
    border-radius: 5px;
    background-color: #1b1939;

    li {
      width: 189px;
      height: 310px;
      margin: 0 auto;
      background-color: #3c386b;
    }

    img {
      width: 100%;
      height: 82%;
      overflow: hidden;
      object-fit: cover;
    }
  }
`;

export default {
  Container,
};
