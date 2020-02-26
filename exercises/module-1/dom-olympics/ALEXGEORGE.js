// --------------------------->>>>>>>Qualifier
// Your first task is to use pure JavaScript to insert a header to the top of this page.
// Utilize the css already written for .name and .header
// Notice that your name needs to be a different color. Wrapping text in a span tag is a great way to do this.
// //////////Preliminaries
// 1.Need to create the header that ill be putting inside the header tag
let h1 = document.createElement(`h1`);
// 2. Now i need to add text to the h1 i just created
h1.textContent = `Javascript made this!!!`;
// 1. grab the header id thats in my html/css
document.getElementById(`header`);
// 2. add the created h1 to the header in html
header.appendChild(h1);
// I wont see it added to the page yet because it doesn't have any styles and because its doesn't have the same class name as the header tag
// add a class to the h1
h1.className = `header`;
// now you can see it
// ////////step 2
// Now i need to add the .name into the html under the h1 i just created
// 1. create an h3 to be the subtitle that will be displayed below the h1 i just created
let h3 = document.createElement(`h3`);
//3 give the h3 a class
h3.className = 'header';
// append the created h3 to the header tag
header.appendChild(h3);
//1 create the span that ill put inside the h3 tag
let span1 = document.createElement(`span`);
// this span is for the second half of the text
let span2 = document.createElement(`span`);
// give span 2 text
span2.innerText = ` wrote this with Javascript`;
// 2 give the span a class
span1.className = `name`;
// add the text inside the span
span1.innerHTML = `Alex`;
// append the span to the h3
h3.appendChild(span1);
// append span 2 to the span
// spans are inline elements so they will be on the same line
span1.appendChild(span2).style.color = 'black';
// //////////////// Bronze
// There's some sub par conversation going on in this messaging app. You have two tasks to help give it either a clean slate, or a positive start.
// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
// 1. grab the messages divs with the class of messages
let messages = document.getElementsByClassName(`messages`);
// console.log(`OUTPUT: messages `, messages);
// create the CLEAN STATE of the messages
// 1. select each message and change the text to something nice
const cleanState = () => {
  let positiveMessages = [
    "you're great",
    'thanks!',
    "you're welcome",
    "you're great"
  ];
  for (let i = 0; i < messages.length; i++) {
    messages[i].textContent = positiveMessages[i];
  }
};
// console.log(cleanState);
//If the user clicks the clear button the text will change to clean state
// 1 select the button and add the function to be activated on click event
document.getElementById(`clear-button`).addEventListener('click', cleanState);
// ///////////////// Silver
// Themes!
// Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.
// 1.select the theme button
// let themes = document.getElementById(`theme-drop-down`);
// console.log(`OUTPUT: theme`, theme);
document.getElementById(`theme-drop-down`)
  // i want to change this anonymous function to a named function
  .addEventListener('change', function changeTheme(e) {
    // console.log(e.target.value);
    // write an if and else to change background color of the themes
    if (e.target.value === 'theme-one') {
      // change background-color of the messages
      let leftMsgs = document.getElementsByClassName(`left`);
      for (let i = 0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.background = `brown`;
        leftMsgs[i].style.color = `white`;
      }
    } else if (e.target.value === 'theme-one') {
      // change background-color of the messages
      let rightMsgs = document.getElementsByClassName(`right`);
      for (let i = 0; i < rightMsgs.length; i++) {
        rightMsgs[i].style.background = `blue`;
      }
    }
    // theme 2
    if (e.target.value === 'theme-two') {
      // change background-color of the messages
      let leftMsgs = document.getElementsByClassName(`left`);
      for (let i = 0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.background = `red`;
      }
    } else if (e.target.value === 'theme-two') {
      // change background-color of the messages
      let rightMsgs = document.getElementsByClassName(`right`);
      for (let i = 0; i < rightMsgs.length; i++) {
        rightMsgs[i].style.background = `black`;
        rightMsgs[i].style.color = `white`;
      }
    }
  });
// GOLD
// Be able to add more messages using the form at the bottom.
// For every new message submission, you'll need to create a div
// selects form
let form = document.message;
console.log(`OUTPUT: form`, form);
// add event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // my div
  let myDiv = document.createElement(`div`);
  // get the value of the input box
  let value = document.getElementById('input').value;
  myDiv.textContent = value;
  // add classList with message right
  myDiv.classList.add(`message`, `right`);
  // console.log(myDiv);
  let messages = document.getElementsByClassName('messages')[0];
  messages.appendChild(myDiv);
});