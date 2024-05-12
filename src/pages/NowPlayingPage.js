import { useEffect, useState } from "react";
import getNowPlaying from "../api/api";
import MovieList from "../components/MovieList";

function NowPlayingPage() {
  const [items, setItems] = useState([]);

  const handleNowPlaying = async () => {
    const nowPlaying = await getNowPlaying();
    const data = nowPlaying.results;
    setItems(data);
  };

  useEffect(() => {
    handleNowPlaying();
  }, []);

  return <MovieList items={items} />;
}

export default NowPlayingPage;
