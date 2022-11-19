// step1 onload handler

window.onload = () =>{
    main()
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click',function(){
        const bgColor = generatorRGBColor();
        root.style.backgroundColor = bgColor
    })
}

// step2 random color generator function

function generatorRGBColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return  `rgb(${red},${green},${blue})`
}

//step3 collect all necessary references

// step4 handle click the event
