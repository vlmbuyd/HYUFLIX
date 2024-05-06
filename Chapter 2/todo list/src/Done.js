import styled from "styled-components";

const DoneTitle = styled.strong`
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

function Done({ todos, onClick }) {
  const handleClick = (id) => onClick(id);
  return (
    <div>
      <DoneTitle>해낸 일</DoneTitle>
      <Ul>
        {todos.map((todo, index) =>
          todo.isDone === true ? (
            <Li key={index}>
              {todo.content}{" "}
              <button onClick={() => handleClick(todo.id)}>삭제</button>
            </Li>
          ) : null
        )}
      </Ul>
    </div>
  );
}

export default Done;
