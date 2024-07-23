/* 
    ? Event Listeners
    * listens for input from users
        * inherently async, event can happen any time
    * always listen for one single type of event
    * can listen for any kind of event
        * clicks
        * key strokes
        * specific chars or chords
        * mouse hover events
        * input changes
        * https://www.w3schools.com/jsref/dom_obj_event.asp
    * always attached to a specific element
    * take a callback, the callback runs when the event happens
*/

let redStatus = false;

// goal: make button turn the box red
// select the box
// select the button
// add event listener to button

const box = document.getElementById("box");
const redButton = document.getElementById("red-button");

redButton.addEventListener("click", () => {
  box.classList.toggle("red");
  redStatus = !redStatus;
});

// goal: add opacity button
const opacityButton = document.getElementById("opacity-button");

opacityButton.addEventListener("click", () =>
  box.classList.toggle("transparent")
);

box.addEventListener("mouseenter", () => {
  // if blue is turning on:
  //    if red is on, remove it
  //    if red is off, leave it
  // if blue is turning off:
  //    set red back to how it was before
  if (!box.classList.contains("blue")) {
    box.classList.add("blue");
    box.classList.remove("red");
  } else {
    box.classList.remove("blue");
    if (redStatus) {
      box.classList.add("red");
    } else {
      box.classList.remove("red");
    }
  }
});
