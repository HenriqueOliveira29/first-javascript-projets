const colors = ["red", "blue", "green", "pink", "grey", "yellow"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const random = randomNumber()
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];

});

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}