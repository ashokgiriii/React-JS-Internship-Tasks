const localStorageArrayData = localStorage.getItem("formData");
const parsedlocalStorageArrayData = JSON.parse(localStorageArrayData);

console.log(parsedlocalStorageArrayData);

document.querySelector("form.login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.querySelector("#loginUsername").value.trim();
  let email = document.querySelector("#loginEmail").value.trim();

  const realUser = parsedlocalStorageArrayData.some((eachUser) => {
    return username === eachUser.username && email === eachUser.email;
  });

  if (!realUser) {
    document.querySelector(
      ".error-message.wrong-username-email"
    ).style.display = "flex";
    document.querySelector(".error-message.wrong-username-email").textContent =
      "Username or Email Wrong !";
  } else {
    document.querySelector(
      ".error-message.wrong-username-email"
    ).style.display = "none";
    document.querySelector(".error-message.wrong-username-email").textContent =
      "";

    // showing the pop up message with model box
    document.querySelector("div.modelpop").style.right = "4vw";
    setTimeout(() => {
      document.querySelector("div.modelpop").style.right = "-100%";
    }, 3000);

    localStorage.setItem("youAreLoggedIn", "true");
    window.location.href = "./adminDashboard.html";
  }
});
