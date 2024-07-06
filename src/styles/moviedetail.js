import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 91vh;
  padding-left: 15%;

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

  .content-container {
    display: flex;
    /* justify-content: space-around; */

    .movie-img {
      margin-right: 80px;

      img {
        width: 300px;
        height: 420px;
        object-fit: cover;
        opacity: 0.9;
      }
    }

    .description {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      overflow: hidden;
      height: 400px;
      color: white;
    }

    .title {
      width: 550px;
      font-size: 30px;
    }

    .rating,
    .release-date,
    .plot-title {
      font-size: 17px;
    }

    .rating {
      display: inline-block;
      margin-right: 10px;
    }

    .plot-container {
      display: flex;
      flex-direction: column;
      max-width: 550px;

      @media screen and (max-width: 1200px) {
        max-width: 400px;
      }

      @media screen and (max-width: 1023px) {
        max-width: 250px;
      }

      @media screen and (max-width: 767px) {
        max-width: 150px;
      }
    }

    .plot-title {
      margin-bottom: 10px;
    }
    .plot {
      display: flex;
      flex-wrap: nowrap;
      font-size: 15px;
      line-height: 1.5em;
      /* max-width: 400px; */
    }
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

const CreditContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 30px;
  background-color: #1f2047;

  .cast,
  .crew {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 17px;
    color: #81818a;
    margin-bottom: 35px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px; */
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    width: 80%;
    text-align: center;
    line-height: 1.4em;
    color: white;
  }

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

export default { Container, RatingContainer, IconContainer, CreditContainer };
