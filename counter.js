let add = document.querySelector("#add");
let lower= document.querySelector("#lower");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

add.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
    If (value >= 50) {
        value = 49;}
});

lower.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
    If (value <= -1) {
        value = 0;}
});


