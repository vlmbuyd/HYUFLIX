import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredit, getDetail } from "../api/api";
import Styled from "../styles/moviedetail";
import starIcon from "../assets/star.png";

function MovieDetail() {
  const [item, setItem] = useState({});
  const [people, setPeople] = useState({});
  const [rating, setRating] = useState();
  const { movieId } = useParams();

  const handleDetail = async () => {
    const result = await getDetail(movieId);
    setItem(result);
    const rate = Math.floor(result.vote_average);
    setRating(rate);
    const credit = await getCredit(movieId);
    setPeople(credit);
    console.log(people);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  useEffect(() => {
    handleDetail();
    scrollToTop();
  }, [movieId]);

  return (
    <>
      <Styled.Container
        path={`https://image.tmdb.org/t/p/original${
          item.belongs_to_collection?.backdrop_path || item.backdrop_path
        }`}
      >
        <div className="content-container">
          <div className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.original_title}
            />
          </div>

          <div className="description">
            <h1 className="title">{item.original_title}</h1>
            <Styled.RatingContainer>
              <strong className="rating">평점 </strong>
              <Styled.IconContainer>
                {Array.from({ length: rating }, (_, i) => {
                  return <img key={i} src={starIcon} value={rating} />;
                })}
              </Styled.IconContainer>
            </Styled.RatingContainer>
            <strong className="release-date">개봉일 {item.release_date}</strong>
            <div className="plot-container">
              <strong className="plot-title">줄거리</strong>
              <p className="plot">
                {item.overview === ""
                  ? "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."
                  : item.overview}
              </p>
            </div>
          </div>
        </div>
      </Styled.Container>

      <Styled.CreditContainer>
        <div className="cast">
          <h3>출연진</h3>
          <ul>
            {people.cast?.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
                    }
                    alt="profile-image"
                  />
                  <span>{item.original_name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="crew">
          <h3>제작진</h3>
          <ul>
            {people.crew?.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    src={
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
                    }
                    alt="profile-image"
                  />
                  <span>{item.original_name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Styled.CreditContainer>
    </>
  );
}

export default MovieDetail;
