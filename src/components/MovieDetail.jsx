import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredit, getDetail } from "../api/api";
import Styled from "../styles/moviedetail";
import starIcon from "../assets/star.png";

function MovieDetail() {
  const [item, setItem] = useState({});
  const [rating, setRating] = useState();
  const { movieId } = useParams();

  const handleDetail = async () => {
    console.log(movieId);
    const result = await getDetail(movieId);
    console.log(result);
    const credit = await getCredit(movieId);
    console.log(credit);
    // setItem(detail);

    // const rate = Math.floor(detail.vote_average);
    // setRating(rate);
  };

  useEffect(() => {
    handleDetail();
  }, [movieId]);

  // return (
  //   <Styled.Container>
  //     <Styled.BackgroundImg
  //       src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
  //       alt={item.original_title}
  //     />
  //     <img
  //       className="movie-img"
  //       src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
  //       alt={item.original_title}
  //     />

  //     <div className="description">
  //       <h1 className="title">{item.original_title}</h1>
  //       <Styled.RatingContainer>
  //         <strong className="rating">평점 </strong>
  //         <Styled.IconContainer>
  //           {Array.from({ length: rating }, (_, i) => {
  //             return <img key={i} src={starIcon} value={rating} />;
  //           })}
  //         </Styled.IconContainer>
  //       </Styled.RatingContainer>
  //       <strong className="release-date">개봉일 {item.release_date}</strong>
  //       <strong className="plot-title">줄거리</strong>

  //       <p className="plot">
  //         {item.overview === ""
  //           ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
  //           : item.overview}
  //       </p>
  //     </div>
  //   </Styled.Container>
  // );
}

export default MovieDetail;
