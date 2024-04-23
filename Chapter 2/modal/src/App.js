function App() {
  const clickOpen = () => console.log("모달이 켜짐");
  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={clickOpen}>버튼 열기</button>
    </div>
  );
}

export default App;
