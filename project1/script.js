let titletext = document.getElementById('title')
let back = document.getElementById('body')
let labels = document.getElementById('inputs')

let colorButton = document.getElementById('color-changer')

let textInput = document.getElementById('text-input')
let textOutput = document.getElementById('text-output')

let fontSizeInp = document.getElementById('font-size-input')
let kerningInp = document.getElementById('font-kerning-input')

let colorarray = [
{color1: '#1735DB', color2: '#6A6FC5'}, 
{color1:'#8E65EB', color2:'#B6E348'}, 
{color1:'#9B242A', color2:'#E1406A'},
{color1:'#3B8581', color2:'#67A0C2'},
{color1:'#4687D2', color2:'#B36A17'}]

let colorCounter = 0

let textCurrentColor = colorarray[colorCounter].color2
let backCurrentColor = colorarray[colorCounter].color1


titletext.style.color = textCurrentColor
back.style.backgroundColor = backCurrentColor
labels.style.color = textCurrentColor
colorButton.style.color = textCurrentColor
colorButton.style.border = "2px solid" + textCurrentColor


colorButton.addEventListener('click',() =>{
    colorCounter += 1
    if(colorCounter>colorarray.length-1){
        colorCounter = 0
    }
    textCurrentColor = colorarray[colorCounter].color2
    backCurrentColor = colorarray[colorCounter].color1
    titletext.style.color = textCurrentColor
    back.style.backgroundColor = backCurrentColor
    labels.style.color = textCurrentColor
    colorButton.style.color = textCurrentColor
    colorButton.style.border = "2px solid" + textCurrentColor
    console.log(textCurrentColor, backCurrentColor)
})

textInput.addEventListener('input', ()=>{
    textOutput.innerHTML = textInput.value
})

fontSizeInp.addEventListener('input', ()=>{
    textOutput.style.fontSize = fontSizeInp.value + 'px'
})

kerningInp.addEventListener('input', ()=>{
    textOutput.style.letterSpacing = kerningInp.value +'px'
})