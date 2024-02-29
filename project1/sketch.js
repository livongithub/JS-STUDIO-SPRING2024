let smallCanvas;
let smallCanvasGraphics;
let textStr = 'Welcome to the pixelator'
let roundOutput = 0;
let displayGrid = true;

let colorArray = 
[{hex:'#4287f5', R: 66, G: 135, B: 245}, 
{hex:'#9895E8', R: 152, G: 149, B: 232}, 
{hex:"#DE5D2D", R: 222, G: 92, B: 45},
{hex:'#4287f5', R: 66, G: 135, B: 245}]

let colorCounter = 1
let colorIndex = colorArray[colorCounter]

let textInput = document.getElementById('text-input')
let sizeInput = document.getElementById('size-input')     
let pixelInput = document.getElementById('pixel-input') 
let fontButton = document.getElementById('change-font')
let fontRoundness = document.getElementById('roundness')
let displayGridButton = document.getElementById('display-grid')
let lineHeight = document.getElementById('line-height')
let paraAlignment = document.getElementById('para-align')
let xDist = document.getElementById('x-dist')
let yDist = document.getElementById('y-dist')
let radios = document.querySelectorAll('input[name="alignment"]');
let colorChanger = document.getElementById('change-color')
let titles = document.querySelectorAll('h1')
let labels = document.querySelectorAll('label[name="hilight"]')
let buttons = document.querySelectorAll('button')
let pTags = document.querySelector('p')
let boxes = document.getElementsByClassName('box')
let textLabels = document.querySelectorAll('label[name="alignment"')
let canvasCon = document.getElementById('canvas1-container')
let textBox = document.getElementsByClassName('box-inp-text')
let titleBox = document.getElementById('title')

let inputRanges = document.querySelectorAll('input[type="range"]')

let randoButton = document.getElementById('rand-button')

let arrow = document.getElementById('arrow')
let module = document.getElementById('message-page')

arrow.addEventListener('click', ()=>{
    module.style.animationPlayState = 'running'
    console.log(module.style.animationPlayState)
    setTimeout(() => {
        module.style.display = 'none'
      }, "400");
})

let sizeOText = 10
let pixelSizeOutput = 8
let pixelSizeChanged = true; 
let lineHeightOutput = 1.1
let currentAlignment = "LEFT"

let Neue 
let Mushy
let Cloister
let Supply
let WeissRund
let Aurora
let Alpenkreuzer
let Gloock
let EditorialOld
let OldeEnglish
let fontArray = []
let fontCounter = 0
let xDistOut = 10
let yDistOut = 10


changecolor()

textInput.addEventListener('input', ()=>{
    textStr = textInput.value
})
sizeInput.addEventListener('input', ()=>{
    sizeOText = +sizeInput.value
})
pixelInput.addEventListener('input', ()=>{
    pixelSizeOutput = +pixelInput.value;
    pixelSizeChanged = true;
});
xDist.addEventListener('input', ()=>{
    xDistOut = +xDist.value
})
yDist.addEventListener('input', ()=>{
    yDistOut = +yDist.value
})
lineHeight.addEventListener('input', ()=>{
    lineHeightOutput = +lineHeight.value;
});
fontButton.addEventListener('click', ()=>{
    fontCounter += 1
    if(fontCounter>fontArray.length-1){
        fontCounter = 1
    }
})
buttons.forEach(button=>{
    button.addEventListener('mouse', ()=>{
        button.style.backgroundColor = colorIndex.hex
        button.style.color = '#1e1e1e' 
        button.style.transition = '200ms ease-in-out'
    })
    button.addEventListener('mouseout', ()=>{
        button.style.backgroundColor = '#1e1e1e'
        button.style.color = colorIndex.hex
        button.style.transition = '200ms ease-in-out'
    })

})
randoButton.addEventListener('click', ()=>{
    randomize()
})
fontRoundness.addEventListener('input', ()=>{
    roundOutput = +fontRoundness.value
})
displayGridButton.addEventListener('click', ()=>{
    console.log('working')
    displayGrid=!displayGrid
    console.log(displayGrid)
})
colorChanger.addEventListener('click', ()=>{
    colorCounter+=1
    colorIndex = colorArray[colorCounter]
    if(colorCounter>colorArray.length-2){
        colorCounter=0
    }
    console.log(colorIndex)
    changecolor()
})

function changecolor(){
    titles.forEach(title =>{
        title.style.color = colorIndex.hex
    })
    buttons.forEach(button=>{
        button.style.color = colorIndex.hex
        button.style.border = `2px solid ${colorIndex.hex}`
    })
    pTags.style.color = colorIndex.hex
    labels.forEach(label =>{
        label.style.backgroundColor = colorIndex.hex
    })
    boxes.forEach(box=>{
        box.style.border = `2px solid ${colorIndex.hex}`
    })
    textLabels.forEach(radio=>{
        radio.style.color = colorIndex.hex
    })
    canvasCon.style.border = `2px solid ${colorIndex.hex}`
    textBox.forEach(tbox =>{
        tbox.style.border = `2px solid ${colorIndex.hex}`
    })
    textInput.style.borderBottom = `2px solid ${colorIndex.hex}`
    titleBox.style.border = `2px solid ${colorIndex.hex}`
    inputRanges.forEach(intrang =>{
        intrang.style.border = `2px solid ${colorIndex.hex}`
    })
}

function logCheckedValue() {
    const checkedRadio = document.querySelector('input[name="alignment"]:checked');
    console.log(checkedRadio.value); 
    currentAlignment = checkedRadio.value
    updateSmallCanvas();
}

radios.forEach(radio => {
    radio.addEventListener('change', logCheckedValue);
});


function setup() {
  createCanvas(640, 480);
  updateSmallCanvas(); 

  Neue = loadFont('fonts/Helvetica.ttf');   
  Mushy = loadFont('fonts/Mushy.otf'); 
  Cloister = loadFont('fonts/CloiterBlack.ttf'); 
  Supply = loadFont('fonts/Supply.otf'); 
  WeissRund = loadFont('fonts/WeissRund.ttf'); 
  Aurora = loadFont('fonts/aurora.ttf')
  Alpenkreuzer = loadFont('fonts/Alpenkreuzer.ttf')
  Gloock = loadFont('fonts/Gloock.ttf')
  EditorialOld = loadFont('fonts/EditorialOld.otf')
  OldeEnglish = loadFont('fonts/OldeEnglish.ttf')

  fontArray = [Neue, Mushy, Cloister, Supply, WeissRund, Aurora, Alpenkreuzer, Gloock, EditorialOld, OldeEnglish]
}

function draw() {
    if (pixelSizeChanged) {
        updateSmallCanvas(); 
    }
    
    smallCanvasGraphics = smallCanvas;
    smallCanvasGraphics.background(0);
    smallCanvasGraphics.fill(255);
    smallCanvasGraphics.stroke(0)
    smallCanvasGraphics.textSize(sizeOText);
    smallCanvasGraphics.text(textStr, xDistOut, yDistOut, 30, 60);


  background(30);
  
  smallCanvasGraphics.background(30); 
  smallCanvasGraphics.fill(255);
  smallCanvasGraphics.textAlign(eval(currentAlignment));
  smallCanvasGraphics.textFont(fontArray[fontCounter])
  smallCanvasGraphics.textLeading(sizeOText*lineHeightOutput)
  smallCanvasGraphics.text(textStr, xDistOut, yDistOut, 20);

  smallCanvas.loadPixels();
  let scaleX = width / smallCanvas.width;
  let scaleY = height / smallCanvas.height;
  for (let y = 0; y < smallCanvas.height; y++) {
    for (let x = 0; x < smallCanvas.width; x++) {
    var bright;
    let index = (x + y * smallCanvas.width) * 4;
      let r = smallCanvas.pixels[index];
      let g = smallCanvas.pixels[index + 1];
      let b = smallCanvas.pixels[index + 2];
      let a = smallCanvas.pixels[index + 3];

        bright = (r+g+b)/3

       
        if(bright>125){
            fill(colorIndex.R, colorIndex.G, colorIndex.B)
            rect(x * scaleX, y * scaleY, scaleX, scaleY, roundOutput);
        }else{
            fill(30)
            if(displayGrid==true){
                stroke(colorIndex.R, colorIndex.G, colorIndex.B)
            } else{
                noStroke()
            }
            rect(x * scaleX, y * scaleY, scaleX, scaleY);
        }
      
    }
  }
}

function updateSmallCanvas() {
    smallCanvas = createGraphics(width / pixelSizeOutput, height / pixelSizeOutput);
    smallCanvas.pixelDensity(1);
    pixelSizeChanged = false;
}

function randomize(){
    colorCounter = Math.floor(Math.random()*3+1)
    colorIndex = colorArray[colorCounter]
    console.log(colorCounter)
    changecolor()
    fontCounter = Math.floor(Math.random()*10)
    pixelSizeOutput = Math.floor(Math.random()*(10-5)+5)
    pixelSizeChanged = true;
    sizeOText = Math.floor(Math.random()*(40-2)+2)
}
