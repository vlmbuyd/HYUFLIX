import { createGlobalStyle } from "styled-components";
import Title from "./Title";
import Input from "./Input";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color:#dfeaed;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Title></Title>
      <Input></Input>
    </div>
  );
}

export default App;
