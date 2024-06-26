import styled from "styled-components";
import searchIcon from "../assets/search.png";

const Welcome = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  margin-bottom: 30px;
  background-color: black;
  color: white;
  font-size: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
    color: white;
  }

  .search-container {
    position: relative;

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
`;

export default {
  Welcome,
  Container,
};
