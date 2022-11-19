// step1 onload handler
window.onload = ()=>{
    main()
}
function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const bgChangeBtm = document.getElementById('change-btn');
    const copyBtm = document.getElementById('copy-btn');
    bgChangeBtm.addEventListener('click',function(){
        const bgColorHexCod = generatorHexColor();
        root.style.backgroundColor = bgColorHexCod;
        output.value = bgColorHexCod;
    })
    copyBtm.addEventListener('click',function(){
         navigator.clipboard.writeText(output.value);
        alert("Copied the text: " + output.value);
    })

}

// step2 random color generator function

function generatorHexColor (){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
//step3 collect all necessary references

// step4 handle click the event
