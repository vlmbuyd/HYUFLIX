import styled from "styled-components";
import searchIcon from "../assets/search.png";

const Overview = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  padding: 13px 12px;
  font-size: 10px;
  line-height: 1.3em;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

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
    margin-bottom: 40px;
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
      padding-left: 15px;
      border: none;
      border-radius: 50px;
    }

    .search-input:focus {
      outline: none;
      border: 2px solid #4e1570;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 70%;
    max-height: 500px;
    padding: 20px 40px;
    margin-bottom: 30px;
    overflow: auto;
    border-radius: 7px;
    background-color: #1b1939;

    .loading {
      color: #81818a;
      font-size: 11px;
    }

    li {
      position: relative;
      width: 189px;
      height: 310px;
      margin: 0 auto;
      background-color: #3c386b;

      &:hover ${Overview} {
        display: block;
      }
    }

    .content-img {
      width: 100%;
      height: 82%;
      overflow: hidden;
      object-fit: cover;
    }

    .description {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 7px;
    }

    .description h3 {
      width: 75%;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3em;
      color: white;
    }

    .rating {
      display: flex;
    }

    .rating img {
      width: 10px;
      height: auto;
      margin-right: 3px;
    }

    .rating span {
      color: white;
    }
  }

  .search-container::-webkit-scrollbar {
    width: 8px;
    background-color: #1f1e1e;
  }

  .search-container::-webkit-scrollbar-thumb {
    background-color: #e0ba13;
    border-radius: 5px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  .container::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export default {
  Container,
  Overview,
};
