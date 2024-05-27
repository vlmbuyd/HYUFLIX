import { useEffect, useState } from "react";
import Container from "../styles/signup";

function SignUpPage() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    age: "",
    pw: "",
    checkpw: "",
  });
  const [inputValid, setInputValid] = useState({
    usernameValid: false,
    emailValid: false,
    ageValid: false,
    pwValid: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    usernameMsg: "",
    emailMsg: "",
    ageMsg: "",
  });

  const submitRequirements =
    inputValid.usernameValid &&
    inputValid.emailValid &&
    inputValid.ageValid &&
    inputValid.pwValid;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "username":
        setInputValid((prev) => ({
          ...prev,
          usernameValid: value.trim().length > 0 && typeof value === "string",
        }));
        setErrorMessage((prev) => ({
          ...prev,
          usernameMsg: "이름을 입력해주세요!",
        }));
        break;

      case "email":
        setInputValid((prev) => ({
          ...prev,
          emailValid:
            typeof value === "string" &&
            value.trim().length > 0 &&
            value.includes("@"),
        }));
        value.trim().length > 0 && !value.includes("@")
          ? setErrorMessage((prev) => ({
              ...prev,
              emailMsg: "이메일을 형식에 맞게 다시 입력해주세요!",
            }))
          : setErrorMessage((prev) => ({
              ...prev,
              emailMsg: "이메일을 입력해주세요!",
            }));
        break;

      case "age":
        setInputValid((prev) => ({
          ...prev,
          ageValid:
            !isNaN(value) && // 숫자 입력
            Number(value) >= 19 && // 음수 X, 19세 이상
            Number.isInteger(parseFloat(value)) && // 소수 X
            value.trim().length > 0, // 입력O
        }));

        if (value.trim().length > 0) {
          if (isNaN(value)) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이는 숫자로 입력해주세요!",
            }));
          } else if (Number(value) < 0) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이는 양수여야 합니다!",
            }));
          } else if (!Number.isInteger(parseFloat(value))) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "나이를 소수로 입력할 수 없습니다!",
            }));
          } else if (Number(value) < 19) {
            setErrorMessage((prev) => ({
              ...prev,
              ageMsg: "19세 이상만 이용 가능합니다!",
            }));
          }
        } else {
          setErrorMessage((prev) => ({
            ...prev,
            ageMsg: "나이를 입력해주세요!",
          }));
        }
        break;
    }

    // console.log(inputValue);
    // console.log(inputValid);
    // console.log(errorMessage);
  };

  // useEffect(() => {
  //   handleInput();
  // }, [inputValue]);

  return (
    <Container>
      <h1>회원가입</h1>
      <form action="#" method="GET">
        <div className="username-container">
          <input
            name="username"
            value={inputValue.username}
            onChange={handleInput}
            className="username"
            placeholder="이름을 입력해주세요"
          />
          {inputValid.usernameValid ? null : (
            <span className="error-message">{errorMessage.usernameMsg}</span>
          )}
        </div>

        <div className="email-container">
          <input
            name="email"
            onChange={handleInput}
            className="email"
            placeholder="이메일을 입력해주세요"
          />
          {inputValid.emailValid ? null : (
            <span className="error-message">{errorMessage.emailMsg}</span>
          )}
        </div>

        <div className="age-container">
          <input
            onChange={handleInput}
            name="age"
            className="age"
            placeholder="나이를 입력해주세요"
          />
          {inputValid.ageValid ? null : (
            <span className="error-message">{errorMessage.ageMsg}</span>
          )}
        </div>

        <div className="pw-container">
          <input
            name="pw"
            onChange={handleInput}
            className="pw"
            placeholder="비밀번호를 입력해주세요"
          ></input>
        </div>

        <div className="checkpw-container">
          <input
            name="pw"
            onChange={handleInput}
            className="pw"
            placeholder="비밀번호를 입력해주세요"
          ></input>
        </div>

        <button
          disabled={!submitRequirements}
          className={submitRequirements ? "enabled" : "disabled"}
          type="submit"
        >
          제출하기
        </button>
      </form>
      <div className="login-redirect">
        <span>이미 아이디가 있으신가요?</span>
        <span>로그인 페이지로 이동하기</span>
      </div>
    </Container>
  );
}

export default SignUpPage;
