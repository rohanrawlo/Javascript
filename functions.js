// let num=[4,5,8,7];
// num.forEach((num) => {
//     console.log(num*num);
// });

// let arr=[54,85,90,58,85,20,74,,85,90,99,,94,100];

// let newA= arr.filter((arr)=>{
//     return arr >= 90;
// })
// console.log(newA);
// console.dir(document.head);
// let myElement= document.querySelector("h1");
// console.dir(myElement);
// console.dir(document.body.firstChild);
let div=document.querySelector("div");
console.dir(div);
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText= h2.innerText + " ROHAN is KING of WORLD";
let divs=document.querySelectorAll(".box");
for (div of divs) {
            div.innerText="REBEL STAR Prabhas";
}

