import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";

function PopularPage() {
  const [items, setItems] = useState([]);

  const handlePopular = async () => {
    const popular = "popular";
    const popularData = await getAPI(popular);
    const data = popularData.results;
    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    handlePopular();
  }, []);

  return <MovieList items={items} />;
}

export default PopularPage;
