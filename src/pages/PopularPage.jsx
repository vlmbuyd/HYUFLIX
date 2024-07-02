import { useEffect, useState } from "react";
import { getAPI } from "../api/api";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";

function PopularPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePopular = async () => {
    setLoading(true);
    const response = await getAPI("popular");
    const data = response.results;
    setItems(data);
    console.log(items);
    setLoading(false);
  };

  useEffect(() => {
    handlePopular();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <MovieList items={items} />
    </>
  );
}

export default PopularPage;
