import styled from "styled-components";

const Container = styled.div`
  position: relative;

  & .movie-img {
    width: 300px;
    height: 420px;
    position: absolute;
    top: 15%;
    left: 15%;
    object-fit: cover;
  }

  & .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    top: 20%;
    left: 40%;
    width: 500px;
    height: 300px;
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

  & .plot {
    font-size: 15px;
    line-height: 1.5em;
  }
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 91vh;
  object-fit: cover;
  opacity: 0.2;
`;

export default { Container, BackgroundImg };
