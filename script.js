const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


button.onclick = function() {
    let inputValue = input.value;
    console.log(inputValue); 
    input.value = "";
    console.log(inputValue);


const li = document.createElement("li");
const span = document.createElement("span");
const buttonSecond = document.createElement("button");

li.appendChild(span);
li.appendChild(buttonSecond);
span.textContent = inputValue;
buttonSecond.textContent = "Delete";
ul.appendChild(li);

buttonSecond.onclick = function() {
    ul.removeChild(li);
}

input.focus();
};