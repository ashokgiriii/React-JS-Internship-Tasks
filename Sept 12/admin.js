let usersDataArray =
  JSON.parse(localStorage.getItem("localstorageUsers")) || [];

document.querySelector("form.admin-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let adminFullName = document
    .querySelector("input.adminFullName")
    .value.trim();

  let adminEmail = document.querySelector("input.adminEmail").value.trim();

  let adminPhone = document.querySelector("input.adminPhone").value.trim();

  let adminCity = document.querySelector("input.adminCity").value.trim();

  let adminSkills = document.querySelector("select.adminSkills").value.trim();

  const emailRegex = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const fullNameStrictRegex =
    /^(?=.{2,30}$)[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?: [A-Za-zÀ-ÖØ-öø-ÿ'’-]+)+$/;

  const cityRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' .-]{2,50}$/;
  const phoneRegex = /^\d{10}$/;

  if (!fullNameStrictRegex.test(adminFullName)) {
    document.querySelector("span.error-message.name-error").style.display =
      "flex";
    document.querySelector("span.error-message.name-error").textContent =
      "Invalid Name";
    return;
  } else {
    document.querySelector("span.error-message.name-error").style.display =
      "none";
    document.querySelector("span.error-message.name-error").textContent = "";
  }

  if (!emailRegex.test(adminEmail)) {
    document.querySelector("span.error-message.email-error").style.display =
      "flex";
    document.querySelector("span.error-message.email-error").textContent =
      "Invalid Email";
    return;
  } else {
    document.querySelector("span.error-message.email-error").style.display =
      "none";
    document.querySelector("span.error-message.email-error").textContent = "";
  }

  if (!phoneRegex.test(adminPhone)) {
    document.querySelector("span.error-message.phone-error").style.display =
      "flex";
    document.querySelector("span.error-message.phone-error").textContent =
      "Invalid Phone Number";
    return;
  } else {
    document.querySelector("span.error-message.phone-error").style.display =
      "none";
    document.querySelector("span.error-message.phone-error").textContent = "";
  }

  if (!cityRegex.test(adminCity)) {
    document.querySelector("span.error-message.city-error").style.display =
      "flex";
    document.querySelector("span.error-message.city-error").textContent =
      "Invalid City Name";
    return;
  } else {
    document.querySelector("span.error-message.city-error").style.display =
      "none";
    document.querySelector("span.error-message.city-error").textContent = "";
  }

  document.querySelector("span.error-message").style.display = "none";
  document.querySelector("span.error-message").textContent = "";

  const inputData = {
    adminFullName,
    adminEmail,
    adminPhone,
    adminCity,
    adminSkills,
  };

  // if duplicate user xa vane  no push
  const duplicateEmail = usersDataArray.some((eachUser) => {
    return eachUser.adminEmail == adminEmail;
  });
  const duplicatePhoneNumber = usersDataArray.some((eachUser) => {
    return eachUser.adminPhone == adminPhone;
  });

  if (duplicateEmail) {
    document.querySelector("span.error-message.email-error").style.display =
      "flex";
    document.querySelector("span.error-message.email-error").textContent =
      "Email already Exists";
    return;
  }

  if (duplicatePhoneNumber) {
    document.querySelector("span.error-message.phone-error").style.display =
      "flex";
    document.querySelector("span.error-message.phone-error").textContent =
      "Number already Exists";
    return;
  }

  // putting form data on adminFormData
  usersDataArray.push(inputData);
  localStorage.setItem("localstorageUsers", JSON.stringify(usersDataArray));

  document.querySelector("form.admin-form").reset();

  // showing the pop up message with model box
  document.querySelector("div.modelpop").classList.add("active");
  setTimeout(() => {
    document.querySelector("div.modelpop").classList.remove("active");
  }, 2000);

  document
    .querySelector("div.modelpop div img")
    .addEventListener("click", () => {
      document.querySelector("div.modelpop").classList.remove = "active";
    });
});

console.log(usersDataArray);
