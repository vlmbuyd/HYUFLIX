import styled from "styled-components";

const ToDoTitle = styled.strong`
  border-bottom: 2px solid #d7dcde;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  margin-bottom: 8px;
  border-bottom: 2px solid #d7dcde;
`;

function ToDo({ todos }) {
  return (
    <div>
      <ToDoTitle>해야 할 일</ToDoTitle>
      <Ul>
        {todos.map((todo, index) => (
          <Li key={index}>
            {todo} <span>완료</span>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default ToDo;
