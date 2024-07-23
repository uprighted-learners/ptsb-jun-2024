console.log("hello from a separate JS file");

/* 
    ? Document Object Model (DOM)
    the document is a JS object containing 
        the structure and content of the html page
*/

console.log(document);

/* 
    ? Document / Window / Navigator / History
    * document -> outlines the html rendered
    * window -> handles browser-specific functions
    * navigator -> handles language and globalization / localization
    * history -> handles browser session history
*/

console.log(window);
console.log(navigator.languages);
// setTimeout(() => history.back(), 2000);

// ! Create an element using the DOM

// 1. use .createElement() to create the element object
const header = document.createElement("h1");

// 2. give the element content
// header.textContent = "Intro to the DOM";
// header.innerText = "Intro to the <span>DOM</span>";
header.innerHTML = "Intro to the <span>DOM</span>";

console.log(header);

// 3. append the element to its parent element
document.body.appendChild(header);

// ! Interact with Elements already on the page
// ... before we can change an element, first we have to select it

/* 
    ? Query Selectors! 
    we can access elements in a BUNCH of ways
    * getElementById -> HTMLElement
    * getElementsByClassName -> HTMLCollection
        * array-like, it's an iterable list
        * does not have array methods
    * getElementsByTagName -> HTMLCollection
    * querySelector -> HTMLElement
    * querySelectorAll -> NodeList
*/

const topicList = document.getElementById("topic-list");
console.log(topicList);

// const listItems = document.getElementsByTagName("li");
const listItems = document.getElementsByClassName("topic");
console.log(listItems);

const topicList2 = document.querySelector("#topic-list");
console.log(topicList2);

const listItems2 = document.querySelectorAll(".topic");
console.log(listItems2);

/* 
    ? Let's add a new <li> to the end of our list
    1. create the new element
    2. give it content
    3. select the parent to append it to (we already did this!)
    4. append it to the parent
*/

// 1. create
const dom = document.createElement("li");
// 2. give content
dom.textContent = "Web APIs";
// 3. select parent (done!)
// 4. append to parent
topicList.appendChild(dom);

// ! Change CSS classes

dom.classList.add("topic");

// this won't work because listItems isn't an HTMLElement, it's a collection
// listItems.classList.add("purple");

// we have to loop over it
for (item of listItems) {
  item.classList.add("purple");
}

for (item of listItems) {
  if (item.classList.contains("fave")) {
    item.classList.add("underline");
  }
}

// in real life, don't use the collection selectors when you want one thing!
const span = document.getElementsByTagName("span")[0];

span.style.color = "red";
span.style.padding = "1em";

const fave = document.querySelector(".fave");
fave.style.fontWeight = "900";
