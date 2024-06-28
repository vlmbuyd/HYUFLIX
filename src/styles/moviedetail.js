import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 90vh;

  &::before {
    content: "";
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background-image: url(${(props) => props.path});
    background-size: cover;
  }

  & .movie-img {
    width: 300px;
    height: 420px;
    /* position: absolute;
    top: 15%;
    left: 15%; */
    object-fit: cover;
    opacity: 0.9;
  }

  & .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    /* position: absolute;
    top: 15%;
    left: 40%; */
    width: 500px;
    height: 400px;
    color: white;
  }

  & .title {
    font-size: 30px;
  }

  & .rating,
  .release-date,
  .plot-title {
    font-size: 17px;
  }

  & .rating {
    display: inline-block;
    margin-right: 10px;
  }

  & .plot {
    font-size: 15px;
    line-height: 1.5em;
  }
`;

const RatingContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  & img {
    width: 16px;
    height: 16px;
  }
`;

export default { Container, RatingContainer, IconContainer };
