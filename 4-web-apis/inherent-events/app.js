const btn = document.getElementById("submit");
const output = document.getElementById("output");

const db = [
  { email: "dburrow@uprighted.com", password: "abc123" },
  { email: "santa@northpole.com", password: "cookies" },
  { email: "rudolph@northpole.com", password: "santa4ever" },
];

btn.addEventListener("click", (event) => {
  // the event.target is the element that the event came from
  // this one is part of a form, so it has a form attribute!
  const email = event.target.form[0].value;
  const pw = event.target.form[1].value;

  // find users from db with a given email address
  const user = db.filter((entry) => entry.email === email);

  if (user.length === 0) {
    output.innerText = "user not found";
    event.preventDefault();
  } else {
    if (user[0].password === pw) {
      output.innerText = "user authenticated";
    } else {
      output.innerText = "incorrect password";
      event.preventDefault();
    }
  }
});

// override the default behavior of a link! Nefarious!
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "https://youtu.be/dQw4w9WgXcQ?feature=shared";
});
