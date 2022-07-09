"use strict";
// const dec=document.querySelector(".decrease");
// const inc=document.querySelector(".increase");
// const reset=document.querySelector(".reset");
// const count=document.querySelector(".num");
// let num=0;
// inc.addEventListener("click",function(){
//     num++;
//     count.textContent=`${num}`;
// });
// dec.addEventListener("click",function(){
//     num--;
//     count.textContent=`${num}`;
// });
// reset.addEventListener("click",function(){
//     num=0;
//     count.textContent=`${num}`;
// });
// if(num<0){
//     count.style.color='red';
// };

let count=0;
const buttons=document.querySelectorAll(".btn");
const value=document.querySelector(".num");
console.log(value);
buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        const list=this.classList;
        if(list.contains("decrease")){
            count--;
        }else if(list.contains("increase")){
            count++
        }else{
            count=0;
        }
        if(count<0){
            value.style.color="red";
        }else if(count>0){
            value.style.color="green";
        }else{
            value.style.color="white";
        }
        value.textContent=`${count}`;
    })
    
});
