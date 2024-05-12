import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";

function TopRatedPage() {
  const [items, setItems] = useState([]);

  const handleTopRated = async () => {
    const toprated = "toprated";
    const topRated = await getAPI(toprated);
    const data = topRated.results;
    setItems(data);
  };

  useEffect(() => {
    handleTopRated();
  }, []);

  return <MovieList items={items} />;
}

export default TopRatedPage;
