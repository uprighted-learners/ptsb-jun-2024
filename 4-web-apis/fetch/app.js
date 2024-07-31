const jsonData = document.getElementById("json-data");

function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response not okay.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jsonData.innerText = data.title;
    })
    .catch((error) => console.error("BIG PROBLEM", error));
}

fetchTodos();
