const form = document.querySelector("form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const number = document.querySelector(".number");
const userInfo = document.querySelector(".user-info");


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


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputData = {
    name: name.value,
    email: email.value,
    number: number.value,
  };

  
  formData.push(inputData);


  localStorage.setItem("data", JSON.stringify(formData));

  
  showTable();

//   form lai reset 
  form.reset();
});

// delting the userrr
function deleteUser(index) {
  formData.splice(index, 1); // Remove from array
  localStorage.setItem("data", JSON.stringify(formData)); // Update localStorage
  showTable(); // Re-render
}


// editing the userrr
function editUser(index) {
  const user = formData[index]; //kun index tha pauna lai
  name.value = user.name;
  email.value = user.email;
  number.value = user.number;

  //   aba jun edit vako xa tyo chai delete garni ani naya ta form submit vayesi afai aauxa
  formData.splice(index, 1);
  localStorage.setItem(JSON.stringify(formData));

  //   last ma table lai feri dekhauna parxa
  showTable;
}
