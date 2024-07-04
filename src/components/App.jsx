import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #1f2047;
  /* background-color: #292a54; */
`;

export const Context = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider value={{ isLogin, setIsLogin }}>
      <Container>
        <GlobalStyles></GlobalStyles>
        <Nav />
        <Outlet></Outlet>
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
