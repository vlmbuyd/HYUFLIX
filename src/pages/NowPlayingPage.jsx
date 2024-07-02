import { useEffect, useState } from "react";
import { getAPI } from "../api/api";
import MovieList from "../components/MovieList";
import Loading from "../components/Loading";

function NowPlayingPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleNowPlaying = async () => {
    setLoading(true);
    const response = await getAPI("now_playing");
    const data = response.results;
    console.log(data);
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    handleNowPlaying();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <MovieList items={items} />
    </>
  );
}

export default NowPlayingPage;
