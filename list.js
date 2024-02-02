const list = document.querySelector("ul");
const food = document.querySelector("input");
const submit = document.querySelector("button")

submit.addEventListener('click', () => {
const currentFood = food.value;
food.value =``; 

const listAdd = document.createElement('li');
const spanned = document.createElement('span');
const deleteButton = document.createElement('button');

listAdd.appendChild(spanned);
spanned.textContent = currentFood;
listAdd.appendChild(deleteButton);
deleteButton.textContent = "Delete";
list.appendChild(listAdd);
deleteButton.addEventListener('click', () => {
    list.removeChild(listAdd);
});

food.focus();
});

