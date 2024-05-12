import { useEffect, useState } from "react";
import getAPI from "../api/api";
import MovieList from "../components/MovieList";

function NowPlayingPage() {
  const [items, setItems] = useState([]);

  const handleNowPlaying = async () => {
    const nowplaying = "nowplaying";
    const nowPlaying = await getAPI(nowplaying);
    const data = nowPlaying.results;
    console.log(data);
    setItems(data);
  };

  useEffect(() => {
    handleNowPlaying();
  }, []);

  return <MovieList items={items} />;
}

export default NowPlayingPage;
