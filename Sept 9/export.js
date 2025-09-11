// api.js
export function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      return response.json();
    }
  );
}
