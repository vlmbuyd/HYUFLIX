import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  color: white;

  & h1 {
    font-size: 17px;
    margin-bottom: 40px;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & input {
    width: 450px;
    height: 40px;
    padding-left: 15px;
    border-radius: 20px;
    margin-bottom: 8px;
  }

  & input::placeholder {
    font-size: 11px;
  }

  & .error-message {
    margin-left: 8px;
    font-size: 11px;
    color: #a12110;
  }

  & .id-container,
  .pw-container {
    display: flex;
    flex-direction: column;
    height: 60px;
  }

  & .id-container {
    margin-bottom: 5px;
  }

  & .pw-container {
    margin-bottom: 30px;
  }

  & button {
    margin: 0 auto 40px auto;
    width: 400px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
    font-weight: 600;
  }

  & .enabled {
    background-color: #e6b71e;
    color: black;
  }

  & .disabled {
    background-color: white;
    color: black;
  }
`;

export default Container;
