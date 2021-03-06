/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/

const changeTitle = function (newTitle) {
  const title = document.querySelector("h1");
  title.innerText = newTitle;
};
changeTitle("New Title!");  

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/


const addClassToTitle = function () {
  const title = document.querySelector("h1");
  title.classList.add("myHeading");
  };
addClassToTitle();

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/


const changePcontent = function () {
 const paragraphs = document.querySelectorAll("div p");  // Declare new function and select all P elements in the first div
 paragraphs.forEach((p) => {                             // forEach loop to target each <p> element
     p.innerText = "New text!";                          // .innerText function and declaring the new text
   }); 
 };
  //
changePcontent()                                         // Calling the code



/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.href = "https://www.google.com";
    });
  };
  changeUrls();

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

 const addToTheSecond = function (content) {
    const ul = document.querySelectorAll("ul")[1];
    ul.innerHTML += `<li>${content}</li>`;
    // const li = document.createElement("li"); /* longer way to do it/breakdown of above lines function */
    // li.innerText = "new item";
    // ul.appendChild(li);
  };
  addToTheSecond("new item");

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function (content) {
    const newParagraph = document.querySelectorAll("div")[0]; // Creating new function and selecting the 1st div
    newParagraph.innerHTML += `<p>${content}</p>`;  // Taking the new function by its given name (newParagraph) and using the .innerHTML and += functions to change the HTML content and concatenate it in addition to the previously available content
};
addParagraph("New Paragraph"); // Calling the function

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
  const byeUI = document.querySelectorAll("ul")[0].style.visibility = "hidden";  // Starting to get it! Different method from answers, .style adds styling to the element and with .visibility added and set to hidden removes the element
};  // could take out .style.visibility and have ul.remove(); here, would this cause faster or slower processing of the code?
firstUlDisappear();

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function () {
  const goGreen = document.querySelectorAll("ul"); // Created function to select all the uls
  goGreen.forEach((ul) => { // Targeted the new function with its declared name, used .forEach to select the uls and need clarification on how the rest of the sum works, can we just add a classList in this line instead as we have selected the uls with the above line already?
      ul.classList.add("b-green");
  });
};
paintItGreen();

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
  const clickChange = document.querySelectorAll("h1");

};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
  //
};

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
// ...

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
  //
};

/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/