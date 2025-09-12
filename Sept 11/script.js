const form = document.querySelector("form");
const formSubmitButton = document.querySelector(".form-submit-button");
const userInfo = document.querySelector(".user-info");

// delete box model
const deletePopUp = document.querySelector(".delete-pop-up");

// suru ma check garni data xa ki  nai natra khali array xodni
let formData = JSON.parse(localStorage.getItem("data")) || [];

// Function to display user table
function showTable() {
  // table lai clear garni natra double table data aauxa
  userInfo.innerHTML = "";

  //   ya chai formData ko container ma jati xa tyo lai render hanni
  formData.forEach((e, index) => {
    userInfo.innerHTML += `
      <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.number}</td>
        <td>${e.age}</td>
        <td>
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// table lai call gareko
showTable();

// Submiting the form
formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();

  // all the inpUT value
  const name = document.querySelector(".name").value.trim();
  const email = document.querySelector(".email").value.trim();
  const number = document.querySelector(".number").value.trim();
  const age = document.querySelector(".age").value.trim();

  // reges
  const nameRegex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ageRegex = /^(?:1[01][0-9]|120|[1-9][0-9]?)$/;

  // Name validation
  if (!nameRegex.test(name)) {
    document.querySelector(".name-error-message").style.opacity = "1";
    document.querySelector(".name-error-message").textContent = "Invalid Name!";
    return;
  } else {
    document.querySelector(".name-error-message").style.opacity = "";
    document.querySelector(".name-error-message").textContent = "";
  }

  // Phone number validation
  if (!phoneRegex.test(number)) {
    document.querySelector(".number-error-message").style.opacity = "1";
    document.querySelector(".number-error-message").textContent =
      "Invalid Number!";
    return;
  } else {
    document.querySelector(".number-error-message").style.opacity = "0";
    document.querySelector(".number-error-message").textContent = "";
  }

  // Email Validation
  if (!emailRegex.test(email)) {
    document.querySelector(".email-error-message").style.opacity = "1";
    document.querySelector(".email-error-message").textContent =
      "Invalid Email!";
    return;
  } else {
    document.querySelector(".email-error-message").style.opacity = "0";
    document.querySelector(".email-error-message").textContent = "";
  }

  // Age validation
  if (!ageRegex.test(age)) {
    document.querySelector(".age-error-message").style.opacity = "1";
    document.querySelector(".age-error-message").textContent = "Invalid Age!";
    return;
  } else {
    document.querySelector(".age-error-message").style.opacity = "0";
    document.querySelector(".age-error-message").textContent = "";
  }

  // Storing t the data
  const inputData = {
    name: name,
    email: email,
    number: number,
    age: age,
  };

  formData.push(inputData);
  localStorage.setItem("data", JSON.stringify(formData));

  showTable();

  form.reset();
});



// indexing 0 rakheko iniatially 
let whichToDelete = null;

// delting the userrr
function deleteUser(index) {
  whichToDelete = index;   //yele kun ho target garxa
  deletePopUp.style.display = "flex";
}

document.querySelector(".want-to-delete").addEventListener("click", () => {
  formData.splice(whichToDelete, 1); 

  localStorage.setItem("data", JSON.stringify(formData)); 


  showTable(); 

  deletePopUp.style.display = "none";
});

document.querySelector(".want-to-cancel").addEventListener("click", () => {
  deletePopUp.style.display = "none";
});

// editing the userrr
function editUser(index) {
  const user = formData[index]; //kun index tha pauna lai
  document.querySelector(".name").value = user.name;
  document.querySelector(".email").value = user.email;
  document.querySelector(".number").value = user.number;
  document.querySelector(".age").value = user.age;

  //   aba jun edit vako xa tyo chai delete garni ani naya ta form submit vayesi afai aauxa
  formData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(formData));

  //   last ma table lai feri dekhauna parxa
  showTable();
}
