import { useState } from "react";
import styled from "styled-components";

const ToDoInput = styled.input`
  width: 500px;
  height: 55px;
  padding-left: 15px;
  margin-bottom: 40px;
  border: 1px solid grey;

  &::placeholder {
    color: grey;
  }
`;

function Input() {
  const [todo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((todos) => todo, ...todos);
    setToDo("");
    console.log(todos);
  };
  return (
    <form onSubmit={onSubmit}>
      <ToDoInput
        value={todo}
        onChange={onChange}
        placeholder="UMC 스터디 계획을 작성해보세요!"
      ></ToDoInput>
    </form>
  );
}

export default Input;
