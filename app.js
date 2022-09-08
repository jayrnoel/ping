const email = document.querySelector(".email");
const errorMsg = document.querySelector(".error__message");
const submit = document.querySelector(".submit__email");
const emailRegex =
  /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;

function validate(email) {
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

email.addEventListener("keyup", () => {
  //   console.log(email.value);
  if (!validate(email.value)) {
    email.classList.add("error");
    errorMsg.style.display = "block";
    console.log("error");
  } else {
    email.classList.remove("error");
    errorMsg.style.display = "none";
  }
  console.log(validate(email.value));
});
