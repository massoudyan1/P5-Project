let lines;
let lStart
let lEnd;
let waveForce;

function setup() {
  createCanvas(400, 400);
  
  // Cange theese 2 factors
  lines = 100;
  waveForce = 120;
  // ______________________
  
  lStart = 0;
  lEnd = 0;
  frameRate(25)
}

function draw() {
  background(255,200,200);
  
  for(let i = 0; i < lines; i++){
    let n = noise(random(-100,100))
    
    lStart = lEnd;
    lEnd = height/2+random(-n, n)*waveForce;
    
    
    strokeWeight(1)
    line(width/lines*i,lStart,width/lines*(i+1),lEnd)
  }
}
