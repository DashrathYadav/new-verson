

// Joke Generator

const url =`https://api.api-ninjas.com/v1/dadjokes?limit=${1}`;
const api_key=`OoaMaZe7FLyEMUyiHZlhpw==svz2w8VZMdT22Tgj`

const option={
    headers: {
        'X-Api-Key': api_key
    }
}

async function getJokes(url) 
{
        try
        {
            let response = await fetch(url,option);
            let data = await response.json();
            console.log(data);
            return data;
        }
        catch(err)
        {
            console.log(err)
        }

 }

 


 






// html elements linking

let joke=document.getElementById("joke");
let form= document.getElementById("btn");
let loader=document.getElementById("loader");
loader.style.visibility="hidden";


form.onclick=(event)=>{
    event.preventDefault();

        loader.style.visibility="visible";
        joke.style.visibility="hidden";
        getJokes(url).then((res)=>{
            console.log(res[0].joke)
            loader.style.visibility="hidden";
            joke.innerHTML=res[0].joke;
            joke.style.visibility="visible";

          });

          

}


// on button click event
//   form.addEventListener('submit',action);
    
//   function action(event)
//   {
//     event.preventDefault();
    
//         getJokes(url).then((res)=>{
//             console.log(res)
//           });

//   }


 
 
  console.log("I was below you still got exxecuted faster by you")
  
