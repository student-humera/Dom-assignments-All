const textInput=document.getElementById('chat-input')
const listItem=document.getElementById('chat-messages')
textInput.addEventListener('keydown', (e)=>{
    if(e.key ==='Enter') {
       const newItem=document.createElement('li');
       newItem.textContent=textInput.value;
       listItem.appendChild(newItem)
        textInput.value="";
    }
})

//task-2
const alertBtn = document.getElementById("alert-btn");
const alertMsg = document.getElementById("alert-msg");
// Click event
alertBtn.addEventListener("click", function () {
    alertMsg.style.display = "block";
    // Hide after 3 seconds
    setTimeout(function () {
        alertMsg.style.display = "none";
    }, 3000);
});

//task-2-counter
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const counterDisplay = document.getElementById("counter-display");
// Variables
let count = 0;
let timerId;
// Start counter
startBtn.addEventListener("click", function () {
    timerId = setInterval(function () {
        count++;
        counterDisplay.textContent = count;
    }, 1000);
});
// Stop counter
stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
});

//task-3
const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const greetingName = document.getElementById("greeting-name");

const savedName = localStorage.getItem("savedName");

if (savedName) {
    greetingName.textContent = savedName;
}
// Save button
saveBtn.addEventListener("click", function () {
    const value = nameInput.value;
    localStorage.setItem("savedName", value);
    greetingName.textContent = value;
});

//task-4
const delegationList = document.getElementById("delegation-list");
//add click listener to parent instead of adding it to each child
delegationList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});