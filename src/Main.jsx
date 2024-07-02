import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetail from "./components/MovieDetail";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import MovieList from "./components/MovieList";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="movie/:movieId" element={<MovieDetail />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="/:idx">
            <Route index element={<MovieList />} />
            <Route path="/:idx/movie/:movieId" element={<MovieDetail />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
