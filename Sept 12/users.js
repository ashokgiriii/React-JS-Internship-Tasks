let localData = JSON.parse(localStorage.getItem("localstorageUsers")) || [];

const userTable = document.querySelector("tbody.users-row");
const deletePopUp = document.querySelector(".delete-pop-up");

function showingTheTable() {
  userTable.innerHTML = "";

  localData.forEach((user, index) => {
    userTable.innerHTML += `
      <tr>
        <td th-title="Id :">${index}</td>
        <td th-title="Full Name :">${user.adminFullName}</td>
        <td th-title="Email :">${user.adminEmail}</td>
        <td th-title="Phone :">${user.adminPhone}</td>
        <td th-title="City :">${user.adminCity}</td>
        <td th-title="Skill :">${user.adminSkills}</td>
        <td th-title="K Garni ? ">
          <button onclick="editUser(${index})">Edit</button>
          <button onclick="deleteUser(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}
showingTheTable();

// making which Tbake row to delete
let whichRowToDelete = null;

function deleteUser(index) {
  whichRowToDelete = index;
  deletePopUp.style.display = "flex";
}

document.querySelector(".want-to-delete").addEventListener("click", () => {
  if (whichRowToDelete !== null) {
    localData.splice(whichRowToDelete, 1);

    localStorage.setItem("localstorageUsers", JSON.stringify(localData));

    showingTheTable();

    whichRowToDelete = null;
  }

  deletePopUp.style.display = "none";
});

document.querySelector(".want-to-cancel").addEventListener("click", () => {
  deletePopUp.style.display = "none";
});

// editing the user

let editPopUp = document.querySelector(".edit-pop-up");
console.log(editPopUp);

let whichRowToEdit = null;

function editUser(index) {
  whichRowToEdit = index;
  const user = localData[index];

  // data lai form ma set garne
  document.querySelector(".adminFullName").value = user.adminFullName;
  document.querySelector(".adminEmail").value = user.adminEmail;
  document.querySelector(".adminPhone").value = user.adminPhone;
  document.querySelector(".adminCity").value = user.adminCity;
  document.querySelector(".adminSkills").value = user.adminSkills;

  editPopUp.style.display = "flex";
}

document.querySelector(".update").addEventListener("click", () => {
  const adminFullName = document.querySelector(".adminFullName").value;
  const adminEmail = document.querySelector(".adminEmail").value;
  const adminPhone = document.querySelector(".adminPhone").value;
  const adminCity = document.querySelector(".adminCity").value;
  const adminSkills = document.querySelector(".adminSkills").value;

  // regex validation
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
  }

  if (!emailRegex.test(adminEmail)) {
    document.querySelector("span.error-message.email-error").style.display =
      "flex";
    document.querySelector("span.error-message.email-error").textContent =
      "Invalid Email";
    return;
  }

  if (!phoneRegex.test(adminPhone)) {
    document.querySelector("span.error-message.phone-error").style.display =
      "flex";
    document.querySelector("span.error-message.phone-error").textContent =
      "Invalid Phone Number";
    return;
  }

  if (!cityRegex.test(adminCity)) {
    document.querySelector("span.error-message.city-error").style.display =
      "flex";
    document.querySelector("span.error-message.city-error").textContent =
      "Invalid City Name";
    return;
  }

  //  validation pass bhaye matra yo code run huncha
  if (whichRowToEdit != null) {
    localData[whichRowToEdit] = {
      adminFullName,
      adminEmail,
      adminPhone,
      adminCity,
      adminSkills,
    };

    localStorage.setItem("localstorageUsers", JSON.stringify(localData));

    showingTheTable();

    whichRowToEdit = null;
    editPopUp.style.display = "none";
  }
});

document.querySelector(".edit-cancel").addEventListener("click", () => {
  editPopUp.style.display = "none";
});
