import styled from "styled-components";

const DoneTitle = styled.strong`
  border-bottom: 2px solid #d7dcde;
`;

function Done() {
  return <DoneTitle>해낸 일</DoneTitle>;
}

export default Done;
