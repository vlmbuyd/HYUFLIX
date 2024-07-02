import styled from "styled-components";
import nextBtn from "../assets/next-btn.png";
import prevBtn from "../assets/prev-btn.png";

const Container = styled.div`
  width: 100%;
  background-color: #1f2047;

  ul {
    padding: 20px 180px 0 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    /* background-color: #292a54; */
  }

  .pagination {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;

    .page-num {
      font-size: 19px;
      color: white;
    }

    .dim {
      width: 32px;
      height: 32px;
      background-image: url(${prevBtn});
      opacity: 0.2;
    }

    .prev-btn {
      width: 32px;
      height: 32px;
      background-image: url(${prevBtn});
    }
    .next-btn {
      width: 32px;
      height: 32px;
      background-image: url(${nextBtn});
    }
  }
`;

export default { Container };
