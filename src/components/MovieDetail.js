import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getAPI from "../api/api";
import Styled from "../styles/moviedetail";

function MovieDetail({ index }) {
  const [item, setItem] = useState({});
  const { title } = useParams();

  function getDetail(arr, title) {
    return arr.find((item) => item.original_title === title);
  }

  const handleDetail = async () => {
    const detailData = await getAPI(index);
    const data = detailData.results;
    const detail = getDetail(data, title);
    console.log(detail);
    setItem(detail);
  };

  useEffect(() => {
    handleDetail();
  }, [title]);

  return (
    <Styled.Container>
      <Styled.BackgroundImg
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={item.original_title}
      />
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={item.original_title}
      />
      <div className="description">
        <h1 className="title">{item.original_title}</h1>
        <strong className="rating">평점 {item.vote_average}</strong>
        <strong className="release-date">개봉일 {item.release_date}</strong>
        <strong className="plot-title">줄거리</strong>
        <p className="plot">
          {item.overview === null || item.overview === undefined
            ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
            : item.overview}
        </p>
      </div>
    </Styled.Container>
  );
}

export default MovieDetail;
