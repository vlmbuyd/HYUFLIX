import styled, { createGlobalStyle } from "styled-components";
import Title from "./Title";
import Input from "./Input";
import ToDo from "./ToDo";
import Done from "./Done";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color:#ebf0f2;
  }
`;

const Container = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
`;

const ToDoContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;

function App() {
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Title></Title>
      <Input></Input>
      <ToDoContainer>
        <ToDo></ToDo>
        <Done></Done>
      </ToDoContainer>
    </Container>
  );
}

export default App;
