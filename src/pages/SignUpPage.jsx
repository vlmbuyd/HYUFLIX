import Container from "../styles/signup";

function SignUpPage() {
  return (
    <Container>
      <h1>회원가입 페이지</h1>
      <form action="#" method="GET">
        <input className="name" placeholder="이름을 임력해주세요"></input>
        <input className="email" placeholder="이메일을 입력해주세요"></input>
        <input className="age" placeholder="나이를 입력해주세요"></input>
        <input className="pw" placeholder="비밀번호를 입력해주세요"></input>
        <input className="pw-check" placeholder="비밀번호 확인"></input>
        <button type="submit">제출하기</button>
      </form>
      <div className="login-redirect">
        <span>이미 아이디가 있으신가요?</span>
        <span>로그인 페이지로 이동하기</span>
      </div>
    </Container>
  );
}

export default SignUpPage;
