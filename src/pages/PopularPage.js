import { useEffect, useState } from "react";
import getPopular from "../api/api";
import MovieList from "../components/MovieList";

function PopularPage() {
  const [items, setItems] = useState([]);

  const handlePopular = async () => {
    const popularData = await getPopular();
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
