let option= document.getElementById("hamburger");
let navbar=document.getElementById("menu");
let logo=document.getElementById("logo");
let flag=0;
navbar.classList.remove("collapse");

option.onclick=()=>{

    console.log(option);
    navbar.classList.toggle("collapse")
    logo.classList.toggle("logo1")
    console.log(navbar.classList.contains("collapse"));

    }





