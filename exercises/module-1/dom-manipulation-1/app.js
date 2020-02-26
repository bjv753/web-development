// Your first task is to use pure JavaScript to insert a header to the top of this page.\\
// Utilize the CSS already written for.\\
// Notice that your name needs to be a different color. Wrapping text in a span tag is a great way to do this.\\

// Preliminaries \\

// Steps 1.0-1.4 \\

// 1.0 Create the header that will go inside the header tag. \\
let h1 = document.createElement(`h1`);
// 1.1 Now add text to the h1 you just created. \\
h1.textContent = `JavaScript Made This`;
// 1.2 Grab the header id = that is inside my html/css. \\
document.getElementById(`header`);
// 1.3 Add the created h1 to the header in html. \\
header.appendChild(h1); // (I won't see it added to the page yet because it doesn't have any styles and because it doesn't have the same class name as the header tag.)\\
// 1.4 Add a class to the h1.\\
h1.className = `header`;

// Steps 2.0-2.9.1 \\

// 2.0 Now I need to add the .name into the html under the h1 I just created.\\
// 2.1 Create an h3 to be the subtitle that will be displayed below the h1 i just created.\\
let h3 = document.createElement(`h3`);
// 2.2 Give the h3 element a class.\\
h3.className = 'header';
// 2.3 Append the created h3 to the header tag.\\
header.appendChild(h3);
// 2.4 Create the span that you will put inside the h3 tag.\\
let span1 = document.createElement(`span`);
// 2.5 This span is for the second half of the text.\\
let span2 = document.createElement(`span`)
// 2.6 Give span2 text.\\
span2.innerText = ` wrote this with JavaScript`;
// 2.7 Give the span a class \\
span1.className = `Name`;
// 2.7 Add the text inside the span \\
span1.innerHTML = `Benjamin`;
// 2.8 Append span1 to the h3 \\
h3.appendChild(span1);
// 2.9 Append span2 to the same line \\
// 2.9.1 Spans are inline elements so they will be on the same line \\
span1.appendChild(span2).style.color = 'black';

// Bronze \\

// Steps 1.0- \\

// There is some sub par conversation going on in this messaging app. Find a way to efficiently upgrade the conversation into professional communication. \\
// Write some custom JavaScript to upgrade the ideas & words of this conversation into something intelligent. \\
// Write a JavaScript function called clearTheText() that will "clearTheText" when the texter clicks the `clear-button`. \\

// 1.0 Grab the message divs with the class of messages. \\
let messages = getElementByClassName(`messages`);
// console.log(`OUTPUT messages`, messages) \\
// create professional communication message options \\
//  1.1 Select each message and change the text to something nice \\
const upgradeConversation = () => {
    let professionalCommunication = [
        "May I ask you a question Dear?",
        "Yes Doctor, thank you for asking",
        "What makes you feel the most comfortable Dear?",
        "Excellent question Doctor! Making my own schedule makes me feel the most comfortable."
    ];
    for (i = 0; i < messages.length; i++) {
        messages[i].textContent = professionalCommunication[i];
    }
};
// console.log(upgradeConversation);
// If the texter clicks the "clear-button" The text will change to Upgrade Conversation.
// Select the function and add the button to be activated on the click event.
document.getElementById(`clear-button`).addEventListener(`click`,upgradeConversation)

// Silver \\
// Themes! 
// Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.
// 1. Select the theme button.
// let themes = document.getElementById(`themes-drop-down`);
// console.log(`OUTPUT: theme, theme);
document.getElementById(`theme-drop-down`)
// I want to change this annonymous function to a named function.
.addEventListener(`change`, function changeTheme(e) { 
// console.log(e.target.value);
// Write an if and else statement to change the background-color of the themes.
if (e.target.value = `theme-one`) {
    // change background-color of the messages
    let leftMsgs = document.getElementByClassName(`left`);
    for (let i=0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.background = `brown`;
        leftMsgs[i].style.background = `white`;
    }
} else if (e.target.value === `theme-one`) {
  // change background-color of the messages
  let rightMsgs = document.getElementByClassName(`right`);
  for (let i = 0; i < rightMsgs.length; i++) {
    rightMsgs[i].style.background = `blue`;
  }  
}
// Theme 2
if (e.target.value === 'theme-two') {
    // change background-color of the messages
    let leftMsgs = document.getElementsByClassName(`left`);
    for (let i = 0; i < leftMsgs.length; i++) {
        leftMsgs[i].style.background = `red`;
    }
} else if(e.target.value === `theme-two`) {
    // change background-color of the messages
    let rightMsgs = document.getElementsByClassName(`right`);
    for (let i = 0; i < rightMsgs.length; i++) {
      rightMsgs[i].style.background = `black`;
      rightMsgs[i].style.color = `white`;  
    }
}
});
// Gold
// Be able to add more messages using the form at the bottom.
// For every new messages submission, you'll need to create a div selects form.
let form = document.message;
console.log(`OUTPUT: form`, form);
// add event listener to the form
form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    // my div
    let myDiv = document.createElement(`div`);
    // get the value of the input box
    let value = document.getElementById(`input`).value;
    myDiv.textContent = value;
    // add classList with message right
    myDiv.classList.add(`message`, `right`);
    // console.log(myDiv);
    let messages = document.getElementsByClassName(`messages`)[0];
    messages.appendChild(myDiv);
})