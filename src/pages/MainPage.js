import styled from "styled-components";

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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 30px;
  color: white;
`;

const SearchContainer = styled.div``;
const Search = styled.input``;

function MainPage() {
  return (
    <>
      <Welcome>환영합니다</Welcome>
      <Main>
        <Title>🎬Find your movies!</Title>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </Main>
    </>
  );
}

export default MainPage;
