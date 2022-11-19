// step1 onload handler

window.onload = () =>{
    main()
}

function main(){

    
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click',function(){
        const bgHexColorCode = generatorHexColor();
        root.style.backgroundColor = bgHexColorCode;
        output.value = bgHexColorCode;
    })
}

// step2 random color generator function
function generatorHexColor () {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
//step3 collect all necessary references

// step4 handle click the event
