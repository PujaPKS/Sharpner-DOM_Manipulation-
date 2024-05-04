// Write your code below:
const fruitElement = document.getElementById("main-heading");
fruitElement.textContent = "Fruit World"
fruitElement.style.color = "orange";

const headerDiv = document.getElementById("header");
headerDiv.style.backgroundColor = "green";
headerDiv.style.borderBottom = "5px solid orange";

const secondH = document.getElementById("basket-heading");
secondH.style.color = "green";


const thirdDiv = document.getElementById("thanks");
let pEle = document.createElement("p");
pEle.textContent = "Please visit us again"

thirdDiv.appendChild(pEle);
