import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";

function UpComing() {
  const [items, setItems] = useState([]);

  const handleUpComing = async () => {
    const upcoming = "upcoming";
    const upComing = await getAPI(upcoming);
    const data = upComing.results;
    setItems(data);
  };

  useEffect(() => {
    handleUpComing();
  }, []);

  return <MovieList items={items} />;
}

export default UpComing;
