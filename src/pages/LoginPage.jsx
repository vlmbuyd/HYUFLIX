import Container from "../styles/loginpage";

function LoginPage() {
  // const navigate = useNavigate();
  // const [inputValue, setInputValue] = useState({
  //   id: "",
  //   pw: "",
  // });
  // const [inputValid, setInputValid] = useState({
  //   idValid: false,
  //   pwValid: false,
  // });
  // const [errorMessage, setErrorMessage] = useState({
  //   idMsg: "",
  //   pwMsg: "",
  // });

  // const submitRequirements = inputValid.idValid && inputValid.pwValid;

  return (
    <Container>
      <h1>로그인</h1>
      <form>
        <input className="id-input" placeholder="아이디" />
        <input className="pw-input" placeholder="비밀번호" type="password" />
        <button type="submit">로그인</button>
      </form>
    </Container>
  );
}

export default LoginPage;
