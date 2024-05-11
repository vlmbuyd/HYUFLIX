import MovieList from "./MovieList";
import { mockData } from "../mock";

function App() {
  const mock = mockData.results;

  console.log(mock);
  return <MovieList items={mock}></MovieList>;
}

export default App;
