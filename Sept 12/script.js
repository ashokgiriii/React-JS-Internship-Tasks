window.addEventListener("load", () => {
  // reload will hide the form
  document.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.checked = false;
  });

  //   escape button will hide the form
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll("input[type='radio']").forEach((radio) => {
        radio.checked = false;
      });
    }
  });
});

// making user is 
let formData = JSON.parse(localStorage.getItem("formData")) || [];

document.querySelector("form.signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let usernameRegex = /^[A-Za-z]{3,20}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let username = document.querySelector("#username").value.trim();
  let email = document.querySelector("#email").value.trim();

  // validatein for username
  if (!usernameRegex.test(username)) {
    document.querySelector(".error-message.signup").textContent =
      "Invalid Username";
    document.querySelector(".error-message.signup").style.display = "flex";
    return;
  }

  //   validateion for email
  if (!emailRegex.test(email)) {
    document.querySelector(".error-message.signup").textContent =
      "Invalid Email";
    document.querySelector(".error-message.signup").style.display = "flex";
    return;
  }

  let inputData = { username, email };

  // checking the duplicate user email or username
  const duplicateUsernameXaVane = formData.some((newUser) => {
    return newUser.username == username;
  });

  const duplicateEmailXaVane = formData.some((newUser) => {
    return newUser.email == email;
  });

  if (duplicateUsernameXaVane) {
    document.querySelector(".error-message.duplicate-error").textContent =
      "Duplicate Username Occurred";
    document.querySelector(".error-message.duplicate-error").style.display =
      "flex";

    return;
  }
  if (duplicateEmailXaVane) {
    document.querySelector(".error-message.duplicate-error").textContent =
      "Duplicate Email Occurred";
    document.querySelector(".error-message.duplicate-error").style.display =
      "flex";

    return;
  }

  //   this will push the new from data as
  formData.push(inputData);
  localStorage.setItem("formData", JSON.stringify(formData));

  // this will clear the form
  document.querySelector("form.signup-form").reset();
  document.querySelector(".error-message.signup").style.display = "none";
  document.querySelector(".error-message.duplicate-error").textContent = "";


//   
  alert("username is created")
});




// 