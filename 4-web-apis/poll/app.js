// goal 1: when we click the klezmer button, increment klezmer count
// select the klezmer button
// add event listener to it
// select the klezmer count
// increment klezmer count (this happens in the event listener)

// all query selectors together at the top, for tidiness

const genres = ["klezmer", "alt", "rb", "edm", "jazz", "yodel"];

genres.forEach((title) => {
  const button = document.getElementById(`${title}-button`);
  const count = document.getElementById(`${title}-count`);

  button.addEventListener("click", () => {
    let num = Number(count.textContent);
    count.textContent = num + 1;
  });
});
