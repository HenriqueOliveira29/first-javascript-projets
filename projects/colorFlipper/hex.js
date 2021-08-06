const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn')

btn.addEventListener("click", function(){
    let text = "#"
    for(let i = 0; i<6;i++){
        text+= colors[randomNumber()];
    }
    color.textContent = text;
    document.body.style.backgroundColor = text;

});

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}