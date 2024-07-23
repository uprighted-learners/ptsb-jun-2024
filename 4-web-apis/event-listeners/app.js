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

// goal: make button turn the box red
// select the box
// select the button
// add event listener to button

const box = document.getElementById("box");
const button = document.getElementById("red-button");

button.addEventListener("click", () => {
  box.classList.toggle("red");
});
