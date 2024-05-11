import styled from "styled-components";

const Image = styled.img`
  height: 380px;
  margin-bottom: 10px;
  /* object-fit: cover;
  object-position: center; */
`;

const ItemContainer = styled.div`
  position: relative;
  width: 270px;
  height: 470px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  margin: 10px 0;
  color: white;
  background-color: #3e469e;
`;

const Title = styled.span`
  margin-left: 7px;
  font-weight: 300;
`;

const Rate = styled.span`
  position: absolute;
  top: 390px;
  right: 10px;
  font-weight: 300;
`;

function MovieListItem({ item }) {
  return (
    <ItemContainer>
      <Image
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_title}
      ></Image>
      <div>
        <Title>{item.original_title}</Title>
        <Rate>{item.vote_average}</Rate>
      </div>
    </ItemContainer>
  );
}

export default MovieListItem;
