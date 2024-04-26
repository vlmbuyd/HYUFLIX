import styled from "styled-components";

const ToDoTitle = styled.strong`
  border-bottom: 2px solid #d7dcde;
`;

const Ul = styled.ul`
  list-style: none;
`;

function ToDo({ todos }) {
  return (
    <div>
      <ToDoTitle>해야 할 일</ToDoTitle>
      <Ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </Ul>
    </div>
  );
}

export default ToDo;
