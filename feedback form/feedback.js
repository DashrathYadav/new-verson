
let happy=document.getElementById("happy");
let neutral=document.getElementById("neutral");
let sad=document.getElementById("sad");
let btn=document.getElementById("btn");
let outer=document.getElementById("outer");
let options=document.getElementById("optinos")
let form=document.getElementById("form");
outer.classList.remove("h","n","uh");

let greeting="Thank You";
greeting= greeting.split("").reverse().join("");
let h1=document.createElement("h1");
h1.innerHTML="Thank You";
h1.classList.add("thankyou")

let clickedState=0;

if(clickedState==0)
{
happy.onmouseover=()=>{
    if(clickedState==0){
        outer.classList.remove("h","uh","n");
        outer.classList.add("h");      
    }
}
happy.onmouseout=()=>{

    if(clickedState==0){
    outer.classList.remove("h","uh","n");
    }
}
sad.onmouseover=()=>{
    if(clickedState==0){
    outer.classList.remove("h","uh","n");
    outer.classList.add("uh");
}
}
sad.onmouseout=()=>{
    if(clickedState==0){
    outer.classList.remove("h","uh","n");
}
}
neutral.onmouseover=()=>{
    if(clickedState==0){
    outer.classList.remove("h","uh","n");
    outer.classList.add("n");
}
}
neutral.onmouseout=()=>{
    if(clickedState==0){
    outer.classList.remove("h","uh","n");
}
}
}

happy.onclick=()=>{
   
    console.log("happy clicked")
    clickedState=1;
    outer.classList.remove("h","uh","n");
    outer.classList.add("h");

    happy.classList.add("slide")
    setTimeout(()=>{
        happy.classList.remove("slide")
    },500)

}
sad.onclick=()=>{
    console.log("sad clicked");
    clickedState=1;
    outer.classList.remove("h","uh","n");
    outer.classList.add("uh");

    sad.classList.add("slide")
    setTimeout(()=>{
        sad.classList.remove("slide")
    },500)

}
neutral.onclick=()=>{
    console.log("neutral clicked");
    clickedState=1;
    outer.classList.remove("h","uh","n");
    outer.classList.add("n");

    neutral.classList.add("slide")
    setTimeout(()=>{
        neutral.classList.remove("slide")
    },500)

}

btn.onclick=()=>{

    
    btn.style.visibility="hidden";
    options.style.visibility="hidden";
    
    setTimeout(()=>{
     
        form.append(h1);
    },500)



    form.classList.add("animation")
    setTimeout(()=>{

        form.classList.remove("animation")
        form.style.visibility="hidden";
    },4000)
}

