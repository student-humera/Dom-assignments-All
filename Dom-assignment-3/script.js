//task-1-a
const form = document.getElementById('user-form')
const displayName= document.getElementById('display-name')
//b,c
form.addEventListener('submit', (e)=>{
    e.preventDefault();

//d
const username=document.value.getElementById('username-input').value;
//e
displayName.textContent= username;
});

//task-2
const deleteButtons=document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function(button) {
    button.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    });
});

//task-3-a
const containerBox=document.getElementById('container-box');
console.log(containerBox.children.length); //log no. of children

//b,c
const colorParentBtn=document.getElementById("color-parent-btn");
colorParentBtn.addEventListener('click', (e)=>{
    const parent=e.target.parentElement;
    parent.style.backgroundColor="lightblue";
});

