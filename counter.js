let add = document.querySelector("#add");
let lower= document.querySelector("#lower");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

add.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
    if(counter >=50) {
        counter = 49;
    }
});

lower.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
    if(counter <=0) {
        counter = 1;
    }
});


