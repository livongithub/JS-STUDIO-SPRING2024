let arrow = document.getElementById('arrow')
let module = document.getElementById('module')

module.style.transition = "all 200ms ease-in-out"

arrow.addEventListener('click', ()=>{
  module.style.marginTop = '-130vw'
  module.style.display = 'hidden'
})


let tjrsBimg;
let tjrsBsong;

let buttonContainer = document.getElementById('contain-button')
let currentSongTrack = document.getElementById('song-playing')
let playButton;
let songChangeButton;
let songCounter = 0;
let songArray = []
let amp;

let trackList = []

let johnMaus;
let hey;
let sensation;
let fairIdea;
let dontStop;
let anotherDebut;
let electromagnetical;
let progress;
let sabado;


let r = 50;
let g = 50;
let b = 50;

var maxSpec = 0
var minSpec = 255

let capture

let threshBright =  125
let threshVeryBright = 220

function preload() {
  tjrsBimg = loadImage('imgs/toujoursb.png');
}

function setup() {
  createCanvas(790, 550);
  pixelDensity(1);
  frameRate(10)
  
  

  johnMaus = loadSound('music/john-maus.mp3', loaded)
  hey = loadSound('music/Hey.mp3', selectSong)
  sensation = loadSound('music/Sensation.mp3')
  fairIdea = loadSound('music/Fair-idea.mp3')
  dontStop = loadSound('music/dont-stop.mp3')
  anotherDebut = loadSound('music/Another-Debut.mp3')
  electromagnetical = loadSound('music/Electromagnetical.mp3')
  progress = loadSound('music/progressiv-luv.mp3')
  sabado = loadSound('music/Sabado-rebelde.mp3')


  songArray = [hey, johnMaus, sensation, fairIdea, dontStop, anotherDebut, electromagnetical, progress, sabado]
  trackList = ['hey', 'john maus', 'sensation', 'fair idea', '...', '...', '...', '...', '...']
  tjrsBsong = songArray[songCounter]

  playButton = createButton("play song");
  playButton.mousePressed(togglePlaying);
  playButton.parent(buttonContainer);

  songChangeButton = createButton("change song");
  songChangeButton.mousePressed(addToCounterSong);
  songChangeButton.parent(buttonContainer);


  tjrsBsong.setVolume(.5)

  amp = new p5.Amplitude()
  fft = new p5.FFT(0, 256);

  capture = createCapture(VIDEO);
  capture.hide();
}

function loaded(){
  console.log('loaded')
}
function selectSong(){
  console.log('change the song')
}

function togglePlaying(){
  if(!tjrsBsong.isPlaying()){
    tjrsBsong.play()
    currentSongTrack.innerHTML = `song playing: ${trackList[songCounter]} by Naicos`
  }else{
    tjrsBsong.pause()
  } 
  console.log('toggle')
}
function addToCounterSong(){
  tjrsBsong.stop()
  songCounter += 1
  if(songCounter>songArray.length-1){
    songCounter = 0;
  }
  tjrsBsong = songArray[songCounter]
  currentSongTrack.innerHTML = `song playing: ${trackList[songCounter]} by Naicos`
  tjrsBsong.play()
  console.log(tjrsBsong)
}

function draw() {
  var spectrum = fft.analyze()
  maxSpec = 0
  sumOfSpec = 0
      for(i=0; i<spectrum.length; i++){
        if(i==0){
          minSpec = spectrum[i]
        }
        if(spectrum[i] != 0 && spectrum[i]<minSpec){
          minSpec = spectrum[i]
        }
        if(maxSpec < spectrum[i]){
          maxSpec = spectrum[i]
        }
        sumOfSpec +=spectrum[i]
      }
  avgSpec = sumOfSpec/spectrum.length

  if(minSpec>10){
    r = 232
  } else if (minSpec<6){
    r = 132
  } else if (minSpec<3){
    r = 32
  }
  if(maxSpec < 220){
    b = 232
  } else if (maxSpec < 240){
    b = 132
  } else if (maxSpec < 250){
    b = 32
  }

  if(avgSpec>60){
    g = 132
  } else if (avgSpec > 120){
    g = 232
  } else {
    g = 32
  }
  background(r, g, b)

  threshBright = map(avgSpec, 10, 90, 40, 150)
  threshVeryBright = map(avgSpec, 10, 90, 120, 240)

  capture.loadPixels();
  let numPixels = 4 * capture.width * capture.height;
  let bright 
  for (let i = 0; i < numPixels; i += 4) {
    bright = (capture.pixels[i] + capture.pixels[i + 1] + capture.pixels[i + 2])/3

    if(bright > threshBright && bright < threshVeryBright){
      capture.pixels[i] = r
      capture.pixels[i + 1] = g;
      capture.pixels[i + 2] = b;
      capture.pixels[i + 3] = 255;
    } else if (bright > threshVeryBright) {
      capture.pixels[i] = g
      capture.pixels[i + 1] = b;
      capture.pixels[i + 2] = r;
      capture.pixels[i + 3] = 255;
    }
    else {
      capture.pixels[i] = 0
      capture.pixels[i + 1] = 0;
      capture.pixels[i + 2] = 0;
      capture.pixels[i + 3] = 255;
    }
  }
  capture.updatePixels();

  image(capture, 0, 0, width, (width * capture.height) / capture.width);
}



// textTjrsB = document.createElement('h1')
// textTjrsB.innerHTML = 'ToujoursB cover generator'
// textTjrsB.id = 'title-tjrsB'
// textTjrsB.style.color = 'white'
// document.body.append(textTjrsB)
