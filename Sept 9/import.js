// app.js
import { fetchData } from "./export.js";

const container = document.getElementById("container");

fetchData().then((data) => {
  if (!data) {
    container.innerHTML = `
    <h1>Loading</h1>
    `;
    return;
  }
  data.forEach((eachdata) => {
    container.innerHTML += `
     <li>
        <span class="id">${eachdata.id} : </span>
        <span class="title">${eachdata.title}</span>
      </li>
      `;
  });
});
