import getData from "../api/api";

function App() {
  const { data } = getData();
  console.log(data);

  return <div>hi</div>;
}

export default App;
