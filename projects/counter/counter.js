const decr = document.querySelector(".btn_decrease");
const reset = document.querySelector(".btn_reset");
const inc = document.querySelector(".btn_incrase");
const value = document.querySelector(".number");

const number = 0;
decr.addEventListener("click", function(){
    number-=1;
    value.textContent = number;
    color();
});
reset.addEventListener("click", function(){
    number=0;
    value.textContent = number;
    color();
});
inc.addEventListener("click", function(){
    number+=1;
    value.textContent = number;
    color();
});

function color(){
    if(number>0){
        value.style.color = green;
    }
    if(number==0){
        value.style.color = black;
    }
    if(number<0){
        value.style.color = red;
    }
}