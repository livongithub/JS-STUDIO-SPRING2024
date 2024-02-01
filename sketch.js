let changingStates = document.getElementById('changing-states')
let para1 = document.getElementById('para1')

let generativeTool = document.getElementById('generative-tool')
let para2 = document.getElementById('para2')

let senderReceiver = document.getElementById('sender-receiver')
let para3 = document.getElementById('para3')

let heightBlock1In
let heightBlock1Out
let heightBlock2In
let heightBlock2Out
let heightBlock3In
let heightBlock3Out

document.addEventListener('click', ()=>{
    console.log(window. innerWidth)
})

if(window.innerWidth > 580){
    heightBlock1In = '75vh'
    heightBlock1Out = '60vh'
    heightBlock2In = '55vh'
    heightBlock2Out = '40vh'
    heightBlock3In = '35vh'
    heightBlock3Out = '20vh'
} else {
    heightBlock1In = '65vh'
    heightBlock1Out = '45vh'
    heightBlock2In = '50vh'
    heightBlock2Out = '30vh'
    heightBlock3In = '35vh'
    heightBlock3Out = '15vh'
}


changingStates.addEventListener("mouseover", ()=>{
    changingStates.style.height = heightBlock1In
    para1.style.display = 'block'
    console.log(heightBlock1In)
    // console.log(screen.availWidth)
});
changingStates.addEventListener("mouseout", ()=>{
    changingStates.style.height = heightBlock1Out
    para1.style.display = 'none'
});

generativeTool.addEventListener("mouseover",()=>{
    generativeTool.style.height = heightBlock2In
    para2.style.display = 'block'
})
generativeTool.addEventListener("mouseout",()=>{
    generativeTool.style.height = heightBlock2Out
    para2.style.display = 'none'
})

senderReceiver.addEventListener("mouseover",()=>{
    senderReceiver.style.height = heightBlock3In
    para3.style.display = 'block'
})
senderReceiver.addEventListener("mouseout",()=>{
    senderReceiver.style.height = heightBlock3Out
    para3.style.display = 'none'
})

function myInFunction(){
    console.log('in')
}
function myOutFunction(){
    console.log('out')
}