import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background-color: grey;
    }
`;

const Container = styled.div`
  margin: auto;
  width: 300px;
  height: 130px;
  background-color: white;
`;

function Modal() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Container>
        <strong>안녕하세요</strong>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <button>닫기</button>
      </Container>
    </div>
  );
}

export default Modal;
