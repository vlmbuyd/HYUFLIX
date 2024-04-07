const userName = document.getElementById("name");

const signUp = document.getElementById("sign-up");

const nameHandler = () => {
  if (isNaN(userName.value)) {
    //문자열이 아닐 때
    const p = document.createElement("p");
    p.innerText = "올바른 형식이 아닙니다!";
  }
};

signUp.addEventListener("submit", () => {
  console.log(userName);
  nameHandler();
});
