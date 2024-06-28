import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MainPage from "./pages/MainPage";
import PopularPage from "./pages/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComing from "./pages/UpComing";
import SignUpPage from "./pages/SignUpPage";
import MovieDetail from "./components/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="movie/:movieId" element={<MovieDetail />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="popular">
            <Route index element={<PopularPage />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
          </Route>

          <Route path="now-playing">
            <Route index element={<NowPlayingPage />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
          </Route>

          <Route path="top-rated">
            <Route index element={<TopRatedPage />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
          </Route>

          <Route path="upcoming">
            <Route index element={<UpComing />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
