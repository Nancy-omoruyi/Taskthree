let add = document.querySelector("#add");
let lower= document.querySelector("#lower");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

add.addEventListener("click" , function(){
    counter += 1;
    counterValue.innerText = counter;
    If (counter >= 50) {
        counter = 49;}
});

lower.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
    If (counter <= -1) {
        counter = 0;}
});


