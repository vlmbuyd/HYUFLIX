const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputAge = document.getElementById("input-age");
const inputPw = document.getElementById("input-pw");
const inputPwCheck = document.getElementById("input-pw-check");

const nameMessage = document.getElementById("name-message");
const emailMessage = document.getElementById("email-message");
const ageMessage = document.getElementById("age-message");
const pwMessage = document.getElementById("pw-message");
const pwCheckMessage = document.getElementById("pw-check-message");

const signUpBtn = document.getElementById("sign-up-btn");

const writeValidation = () => {
  if (inputName.value == "") {
    //이름 유효성 검사
    nameMessage.classList.add("fail-message");
    nameMessage.classList.remove("hide");
    nameMessage.innerText = "필수 입력 항목입니다!";
  } else {
    nameHandler();
  }
  if (inputEmail.value == "") {
    //이메일 유효성 검사
    emailMessage.classList.add("fail-message");
    emailMessage.classList.remove("hide");
    emailMessage.innerText = "올바른 이메일 형식이 아닙니다!";
    // signUpBtn.disabled = true;
  } else {
    emailHandler();
  }

  if (inputAge.value == "") {
    //나이 유효성 검사
    ageMessage.classList.add("fail-message");
    ageMessage.classList.remove("hide");
    ageMessage.innerText = "나이를 입력해주세요!";
    // signUpBtn.disabled = true;
  } else {
    ageHandler();
  }

  if (inputPw.value == "") {
    //비밀번호 유효성 검사
    pwMessage.classList.add("fail-message");
    pwMessage.classList.remove("hide");
    pwMessage.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
    // signUpBtn.disabled = true;
  }

  if (inputPwCheck.value == "") {
    //비밀번호 확인 유효성 검사
    pwCheckMessage.classList.add("fail-message");
    pwCheckMessage.classList.remove("hide");
    pwCheckMessage.innerText = "비밀번호가 일치하지 않습니다.";
    // signUpBtn.disabled = true;
  }
};

const nameHandler = () => {
  if (isNaN(inputName.value)) {
    //문자열 작성 맞을 때
    nameMessage.classList.remove("hide");
    nameMessage.classList.add("success-message");
    nameMessage.innerText = "멋진 이름이에요!";
  }
};

const emailHandler = () => {
  const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (regex.test(inputEmail.value)) {
    emailMessage.classList.remove("hide");
    emailMessage.classList.add("success-message");
    emailMessage.innerText = "올바른 이메일 형식입니다!";
  }
};

const ageHandler = () => {
  ageMessage.classList.remove("hide");
  ageMessage.classList.add("fail-message");
  if (isNaN(inputAge.value)) {
    ageMessage.innerText = "나이는 숫자형식이어야 합니다!";
  } else if (parseFloat(inputAge.value) % 1 !== 0) {
    ageMessage.innerText = "나이는 소수가 될 수 없습니다!";
  } else if (parseInt(inputAge.value) < 0) {
    ageMessage.innerText = "나이는 음수가 될 수 없습니다!";
  } else if (parseInt(inputAge.value) < 19) {
    ageMessage.innerText = "미성년자는 가입할 수 없습니다!";
  } else {
    ageMessage.classList.remove("fail-message");
    ageMessage.classList.add("success-message");
    ageMessage.innerText = "올바른 나이 형식입니다!";
  }
};

signUpBtn.addEventListener("click", writeValidation);
