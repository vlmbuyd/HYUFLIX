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
  }

  & input::placeholder {
    font-size: 11px;
  }

  & .id-input {
    margin-bottom: 15px;
  }

  & .pw-input {
    margin-bottom: 40px;
  }

  & button {
    margin: 0 auto 40px auto;
    width: 400px;
    height: 40px;
    background-color: white;
    border-radius: 20px;
    font-weight: 600;
  }
`;

export default Container;
