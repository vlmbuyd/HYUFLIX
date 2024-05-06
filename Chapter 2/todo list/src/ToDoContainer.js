import { useState } from "react";
import styled from "styled-components";
// import ToDo from "./ToDo";
// import Done from "./Done";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const ToDoWrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
`;

const ToDoTitle = styled.strong`
  display: inline-block;
  margin-bottom: 25px;
  border-bottom: 2px solid #d7dcde;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  margin-bottom: 15px;
  border-bottom: 2px solid #d7dcde;
`;

const DoneTitle = styled.strong`
  display: inline-block;
  margin-bottom: 25px;
  border-bottom: 2px solid #d7dcde;
`;

function ToDoContainer() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos([{ content: todo, isDone: false }, ...todos]);
    console.log(todos);
    setToDo("");
  };

  const clickComplete = (index) => {
    const newToDos = todos.map((newToDo, newIndex) =>
      index === newIndex ? { ...newToDo, isDone: true } : newToDo
    );
    setToDos(newToDos);
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <ToDoInput
          value={todo}
          onChange={onChange}
          placeholder="UMC 스터디 계획을 작성해보세요!"
        ></ToDoInput>
      </form>
      <ToDoWrapper>
        <div>
          <ToDoTitle>해야 할 일</ToDoTitle>
          <Ul>
            {todos &&
              todos.map((todo, index) =>
                todo.isDone === false ? (
                  <Li key={index}>
                    {todo.content}{" "}
                    <button onClick={() => clickComplete(index)}>완료</button>
                  </Li>
                ) : null
              )}
          </Ul>
        </div>
        <div>
          <DoneTitle>해낸 일</DoneTitle>
          <Ul>
            {todos.map((todo, index) =>
              todo.isDone === true ? (
                <Li key={index}>
                  {todo.content} <button>삭제</button>
                </Li>
              ) : null
            )}
          </Ul>
        </div>
      </ToDoWrapper>
    </Wrapper>
  );
}

export default ToDoContainer;
