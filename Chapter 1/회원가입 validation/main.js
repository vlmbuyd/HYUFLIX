const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputAge = document.getElementById("input-age");
const inputPw = document.getElementById("input-pw");
const inputPwCheck = document.getElementById("input-pw.check");

const message = document.querySelectorAll(".message");
const nameMessage = document.getElementById("name-message");
const emailMessage = document.getElementById("email-message");
const ageMessage = document.getElementById("age-message");
const pwMessage = document.getElementById("pw-message");
const pwCheckMessage = document.getElementById("pw-check-message");

const signUpBtn = document.getElementById("sign-up-btn");

const writeValidation = () => {
  //하나라도 작성 안되면 전체가 오류메시지 뜨는 상황
  if (
    inputName.value == "" ||
    inputEmail.value == "" ||
    inputAge.value == "" ||
    inputPW.value == "" ||
    inputPwCheck.value == ""
  ) {
    signUpBtn.disabled = false;

    message.forEach((message) => {
      message.classList.add("fail-message");
      message.classList.remove("hide");
    });

    nameMessage.innerText = "필수 입력 항목입니다!";
    emailMessage.innerText = "올바른 이메일 형식이 아닙니다!";
    ageMessage.innerText = "나이를 입력해주세요!";
    pwMessage.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
    pwCheckMessage.innerText = "비밀번호가 일치하지 않습니다.";
  }
};

const nameHandler = () => {
  const reg = /^[가-힣a-zA-Z]$/;

  console.log(inputName.value);

  if (reg.test(inputName.value)) {
    //문자열 작성 맞을 때
    nameMessage.classList.remove("hide");
    nameMessage.innerText = "멋진 이름이에요!";
  } else {
    nameMessage.innerText = "필수 입력항목입니다!";
  }
};

signUpBtn.addEventListener("click", writeValidation);
