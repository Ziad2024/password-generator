const input=document.querySelector(".pas")
const btn=document.querySelector("button")

let upper="ASDFGHJKLMNBVCXZQWERTYUIOP"
let lower="asdfghjklzxcvbnmpoiuytrewq"
let sympols="!@#$%^&()-_={}[]"
let numbers="0123456789"

let length=12

let allthem=upper + lower + sympols +numbers ;
console.log(allthem)
function createnewpassword(){
    let password="";
    while(length > password.length)
    {
        password+=allthem[Math.floor(Math.random()*allthem.length)]
    }
    
        input.value=password;
}
function copy(){
    input.select();
    document.execCommand("copy")
    input.value=""
    
}