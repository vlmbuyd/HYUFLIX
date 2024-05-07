import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToDoTitle = styled.strong`
  display: inline-block;
  margin-bottom: 30px;
  border-bottom: 2px solid #d7dcde;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  width: 250px;
  padding: 5px 0 10px 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #d7dcde;
`;

const Button = styled.button`
  padding: 4px 3px;
  border: none;
  background-color: #d3dbed;
  font-weight: 500;
`;

function ToDo({ todos, onClick }) {
  const handleClick = (index) => onClick(index);
  return (
    <Container>
      <ToDoTitle>해야 할 일</ToDoTitle>
      <Ul>
        {todos &&
          todos.map((todo, index) =>
            todo.isDone === false ? (
              <Li key={index}>
                {todo.content}
                <Button onClick={() => handleClick(index)}>완료</Button>
              </Li>
            ) : null
          )}
      </Ul>
    </Container>
  );
}

export default ToDo;
