const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".number");
let number = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            number--;  
        }
        else if(styles.contains("increase")){
            number++;
        }
        else{
            number=0;
        }
        value.textContent = number;
        color();
    });
});

function color(){
    if(number>0){
        value.style.color = "green";
    }
    if(number==0){
        value.style.color = "black";
    }
    if(number<0){
        value.style.color = "red";
    }
}