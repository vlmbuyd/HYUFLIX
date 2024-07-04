import Container from "../styles/loginpage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../api/api";

function LoginPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [inputValid, setInputValid] = useState({
    idValid: false,
    pwValid: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    idMsg: "",
    pwMsg: "",
  });

  const submitRequirements = inputValid.idValid && inputValid.pwValid;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "username":
        let isIdValid = value.trim().length > 0 && typeof value === "string";
        setInputValid((prev) => ({
          ...prev,
          idValid: isIdValid,
        }));
        setErrorMessage((prev) => ({
          ...prev,
          idMsg: "아이디를 입력해주세요!",
        }));
        break;

      case "password":
        const regexPw =
          /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-z0-9#?!@$%^&*-]+$/;

        let isPwValid =
          regexPw.test(value) &&
          value.trim().length >= 4 &&
          value.trim().length <= 12;
        setInputValid((prev) => ({
          ...prev,
          pwValid: isPwValid,
        }));

        if (value.trim().length > 0) {
          if (value.trim().length < 4) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "최소 4자리 이상 입력해주세요!",
            }));
          } else if (!regexPw.test(value)) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "비밀번호는 영어, 숫자, 특수문자를 포함해주세요!",
            }));
          } else if (value.trim().length > 12) {
            setErrorMessage((prev) => ({
              ...prev,
              pwMsg: "최대 12자리까지 입력 가능합니다!",
            }));
          }
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            pwMsg: "비밀번호를 입력해주세요!",
          }));
        }
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getToken(inputValue);
    console.log(response);
  };

  return (
    <Container>
      <h1>로그인</h1>
      <form action="#" method="GET" onSubmit={handleSubmit}>
        <div className="id-container">
          <input
            name="username"
            className="id-input"
            placeholder="아이디"
            onChange={handleInput}
          />
          {inputValid.idValid ? null : (
            <span className="error-message">{errorMessage.idMsg}</span>
          )}
        </div>
        <div className="pw-container">
          <input
            name="password"
            className="pw-input"
            placeholder="비밀번호"
            type="password"
            onChange={handleInput}
          />
          {inputValid.pwValid ? null : (
            <span className="error-message">{errorMessage.pwMsg}</span>
          )}
        </div>
        <button
          disabled={!submitRequirements}
          className={submitRequirements ? "enabled" : "disabled"}
          type="submit"
        >
          로그인
        </button>{" "}
      </form>
    </Container>
  );
}

export default LoginPage;
