// goal 1: when we click the klezmer button, increment klezmer count
// select the klezmer button
// add event listener to it
// select the klezmer count
// increment klezmer count (this happens in the event listener)

// goal 2: let people only vote once
// select the input
// in the event listeners that already exist...
// check the name in the input
const genres = ["klezmer", "alt", "rb", "edm", "jazz", "yodel"];
const nameInput = document.getElementById("voter-name");
const warning = document.getElementById("warning");
let voters = [];

genres.forEach((title) => {
  const button = document.getElementById(`${title}-button`);
  const count = document.getElementById(`${title}-count`);

  button.addEventListener("click", () => {
    if (!voters.includes(nameInput.value)) {
      voters.push(nameInput.value);
      let num = Number(count.textContent);
      count.textContent = num + 1;

      // reset input
      nameInput.value = "";
      // remove warning
      warning.classList.add("hidden");
    } else {
      warning.classList.remove("hidden");
    }
    console.log(voters);
  });
});
