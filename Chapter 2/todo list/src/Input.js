import styled from "styled-components";

const ToDoInput = styled.input`
  width: 500px;
  height: 55px;
  padding-left: 15px;
  border: 1px solid grey;

  &::placeholder {
    color: grey;
  }
`;

function Input() {
  return <ToDoInput placeholder="UMC 스터디 계획을 작성해보세요!"></ToDoInput>;
}

export default Input;
