import styled from "styled-components";

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

function ToDo({ todos, onClick }) {
  const handleClick = (index) => onClick(index);
  return (
    <div>
      <ToDoTitle>해야 할 일</ToDoTitle>
      <Ul>
        {todos &&
          todos.map((todo, index) =>
            todo.isDone === false ? (
              <Li key={index}>
                {todo.content}
                <button onClick={() => handleClick(index)}>완료</button>
              </Li>
            ) : null
          )}
      </Ul>
    </div>
  );
}

export default ToDo;
