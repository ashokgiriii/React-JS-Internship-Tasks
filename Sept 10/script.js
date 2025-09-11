let formKoInputarrayContainer = [];

let dataTable = document.querySelector(".data-table");
const form = document.querySelector(".form");

let usernameInput = document.querySelector("#inputUsername");
let ageInput = document.querySelector("#inputAge");
let emailInput = document.querySelector("#inputEmail");

let editGarni = null; // used to track if editing

window.addEventListener("DOMContentLoaded", () => {
  const localStorageKoData = localStorage.getItem("formKoData");
  const parseVaisakekoData = JSON.parse(localStorageKoData);

  if (parseVaisakekoData) {
    formKoInputarrayContainer = parseVaisakekoData;
  }

  showTableAgain();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputUsername = usernameInput.value;
  const inputEmail = emailInput.value;
  const inputAge = ageInput.value;

  let inputAgeRegex = /^(?:[1-9]|[1-9][0-9])$/;
  let inputEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let inputUsernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;

  if (!inputEmailRegex.test(inputEmail)) {
    alert("Invalid Email");
    return;
  }

  if (!inputUsernameRegex.test(inputUsername)) {
    alert("Invalid Username");
    return;
  }

  if (!inputAgeRegex.test(inputAge)) {
    alert("Invalid Age");
    return;
  }

  let inputsData = { inputUsername, inputEmail, inputAge };

  if (editGarni !== null) {
    formKoInputarrayContainer[editGarni] = inputsData;
    editGarni = null;
  } else {
    formKoInputarrayContainer.push(inputsData);
  }

  localStorage.setItem("formKoData", JSON.stringify(formKoInputarrayContainer));

  form.reset();
  showTableAgain();
});

function showTableAgain() {
  dataTable.innerHTML = "";

  formKoInputarrayContainer.forEach((each, index) => {
    dataTable.innerHTML += `
      <tr>
        <td>${each.inputUsername}</td>
        <td>${each.inputEmail}</td>
        <td>${each.inputAge}</td>
        <td>
          <button class="edit" onclick="editData(${index})">Edit</button>
          <button class="delete" onclick="removeData(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function removeData(index) {
  formKoInputarrayContainer.splice(index, 1);
  localStorage.setItem("formKoData", JSON.stringify(formKoInputarrayContainer));
  showTableAgain();
}

function editData(index) {
  let item = formKoInputarrayContainer[index];
  usernameInput.value = item.inputUsername;
  emailInput.value = item.inputEmail;
  ageInput.value = item.inputAge;

  editGarni = index;
}
