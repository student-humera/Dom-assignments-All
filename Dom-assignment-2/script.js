//task-1-a
const button=document.getElementById('theme-btn')
const body=document.body;
button.addEventListener('click', ()=>{
    body.classList.toggle("dark-mode");
});

//b
const hoverBox=document.getElementById('hover-box');
hoverBox.addEventListener('mouseenter', ()=>{
    hoverBox.classList.add('highlight')
});
hoverBox.addEventListener('mouseleave', ()=>{
    hoverBox.classList.remove('highlight')
});

//task-2-a
const button1=document.getElementById('swap-btn')
const image=document.getElementById('profile-pic')
button1.addEventListener('click', ()=>{
    image.src="https://via.placeholder.com/150/0000FF/808080?Text=New+Image"; //also we can use set attribute
    image.alt="New Profile Image";
});

//b
const button2=document.getElementById('disable-btn');
button2.addEventListener('click', ()=>{
    button2.setAttribute('disabled','true'); //also do this by using --button2.disabled=true;
});

//task-3-a
const itemList=document.getElementById('item-list')
const addButton=document.getElementById('add-item-btn')
 //b
addButton.addEventListener('click', ()=> {
    const newItem=document.createElement("li");
    newItem.textContent="New dynaically added item";
    itemList.appendChild(newItem);
});
