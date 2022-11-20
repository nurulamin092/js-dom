/**
 * Project requirement:
 * Change the background color by generating random number hex color by clicking a button
 * also display the hex code to a disable input field
 * add button to copy the color code
 * Add a toast message when copied
 */

//global variable

let div = null;
// step1 onload handler

window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const bgColorChangeBtn = document.getElementById('change-btn');

    bgColorChangeBtn.addEventListener('click',function(){
      const  bgColorHexCode = generatorHexColor();
      root.style.backgroundColor = bgColorHexCode     
      output.value = bgColorHexCode;
    })

    copyBtn.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value); 
        if (div !== null) {
            div.remove();
            div = null;
        }
        generateToastMessage(`${output.value} copied`);    
    })

}
// step2 random color generator function

function generatorHexColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`    
}

function generateToastMessage(msg){
   div = document.createElement('div');
  div.innerText = msg;
  div.className ='toast-message toast-message-slide-in'; 

  div.addEventListener('click', function(){
   div.classList.remove('toast-message-slide-in')
   div.classList.add('toast-message-slide-out')
    
   div.addEventListener('animationend',function(){
        div.remove()
        div = null;
   })
  })

 document.body.appendChild(div)
   
}
//step3 collect all necessary references

// step4 handle click the event
