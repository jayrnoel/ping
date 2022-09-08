const email = document.querySelector(".email");
const errorMsg = document.querySelector(".error__message");
const form = document.querySelector(".subscribe");
const submitBtn = document.querySelector(".submit__email");
const emailRegex =
  /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

function validate(email) {
  if (email === "") {
    return "Whoops! It looks like you forgot to add your email";
  }
  if (emailRegex.test(email)) {
    return true;
  } else {
    return "Please provide a valid email address.";
  }
}
email.addEventListener("keyup", () => {
  if (validate(email.value) !== true) {
    let error = validate(email.value);
    email.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.innerText = error;
  } else {
    email.classList.remove("error");
    errorMsg.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (validate(email.value) !== true) {
    let error = validate(email.value);
    email.classList.add("error");
    errorMsg.style.display = "block";
    errorMsg.innerText = error;
  }
});
