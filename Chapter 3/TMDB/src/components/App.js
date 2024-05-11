import getData from "../api/api";

function App() {
  const { data } = getData();
  console.log(data);

  return;
}

export default App;
