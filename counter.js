let add = document.querySelector("#add");
let lower= document.querySelector("#lower");
let counterValue = document.querySelector("#counterValue");

let counter = 0;

add.addEventListener("click" , ()=>50{
    counter++;
    counterValue.innerText = counter;
});

lower.addEventListener("click" , ()=>0{
    counter--;
    counterValue.innerText = counter;
});


