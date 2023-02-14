// console.log("hello")

// accessing all html element 
let operand1 = document.getElementById("operand1");
let operand2 = document.getElementById("operand2");
let operator = document.getElementById("operator");
let user_input = document.getElementById("user_input");
let score = document.getElementById("score_value");
let square = document.getElementById("square");
let submit = document.getElementById("submit");
let Form = document.getElementById("Form");
let start_btn = document.getElementById("start_btn");
let high_score=document.getElementById("high_score");
let final_score_cls=document.getElementById("final_score_cls");
let final_score=document.getElementById("final_score");
let high_score_cls=document.getElementById("high_score_cls");
let sec=document.getElementById("sec")
let timer=document.getElementById("timer")
let current_score=0;

let highscore=0;
if( ! localStorage.getItem('high_score')) {
localStorage.setItem("high_score",JSON.stringify(highscore));

}
else{
    highscore=  (+localStorage.getItem('high_score'));
    high_score.innerHTML=highscore;
}



// updating current score
score.innerHTML=current_score;

let ans=6;




// // hidding form and displaying start button 
square.style.visibility = "hidden";
high_score_cls.style.visibility="hidden";
final_score_cls.style.visibility="hidden";
sec.style.visibility="hidden";


// after clicking start button rendering form and hidding start button
start_btn.onclick = function () {
    square.style.visibility = "visible";
    high_score_cls.style.visibility="visible";
    start_btn.style.visibility = "hidden";
    final_score_cls.style.visibility="hidden";
     current_score=0;
     sec.style.visibility="visible";   
     let i=1;

        let timer_sec=setInterval(()=>{
            sec.innerHTML=59-i;
            i+=1;
        },1000);


     setTimeout(()=>{
clearInterval(timer_sec)
        square.style.visibility = "hidden";
high_score_cls.style.visibility="hidden";
sec.style.visibility="hidden";
start_btn.style.visibility = "visible";
final_score_cls.style.visibility="visible";
sec.innerHTML=59;
final_score.innerHTML=current_score;

     },1000*60)
}


// handiling form from being relode
function handleEvent(event) {
    event.preventDefault();
    
}
Form.addEventListener('submit', handleEvent)








// main calculation and rendering  function
submit.onclick = (event) => {

    // parsing user input from form 
    let user_ans = +user_input.value;
   console.log( typeof(user_input.value));
   console.log( typeof(+user_input.value));
    user_input.value = "";
    user_input.focus();
    console.log(user_ans);


    (user_ans === ans) ? current_score += 1 : current_score -= 1;
  

    score.innerHTML=current_score;      
    
    if(+localStorage.getItem('high_score') < current_score )
    {
        localStorage.setItem('high_score',JSON.stringify(current_score))
    }
    high_score.innerHTML=localStorage.getItem('high_score');



    let op1=Math.round(Math.random()*100);
    let op2=Math.round(Math.random()*100);
    
    let operators=['+','-','*'];
    let op=((Math.round(Math.random()*100))%3);
        
        

        console.log(typeof(localStorage.getItem('high_score')));
        
    switch(op)
    {
        case 0: ans=op1+op2;
        break;

        case 1 : ans=op1-op2;
        break;

        case 2 : ans=op1*op2;
        break;
        
    }

    operand1.innerHTML=op1;
    operand2.innerHTML=op2;
    operator.innerHTML=operators[op];
    console.log(ans);
 
   




}





// console.log(  Math.round(Math.random()*10));







