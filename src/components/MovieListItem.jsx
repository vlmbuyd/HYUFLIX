import styled from "styled-components";
import starIcon from "../assets/star.png";

const Dim = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: inherit;
  padding: 13px 12px;
  font-size: 14px;
  line-height: 1.5em;
  background-color: rgba(0, 0, 0, 0.6);
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
  background-color: #3c386b;

  &:hover ${Dim} {
    display: block;
  }
`;

const Image = styled.img`
  height: 380px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Title = styled.strong`
  /* margin-left: 7px; */
  width: 70%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3em;
`;

const RateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RatingIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 7px;
`;

const Rate = styled.span`
  display: inline-block;
  font-size: 15px;
  font-weight: 300;
`;

function MovieListItem({ item }) {
  return (
    <>
      <ItemContainer>
        <Dim>{item.overview}</Dim>
        <Image
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={item.original_title}
        />

        <Description>
          <Title>{item.original_title}</Title>
          <RateContainer>
            <RatingIcon src={starIcon}></RatingIcon>
            <Rate>{item.vote_average}</Rate>
          </RateContainer>
        </Description>
      </ItemContainer>
    </>
  );
}

export default MovieListItem;
