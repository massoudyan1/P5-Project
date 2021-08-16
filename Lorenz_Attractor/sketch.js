let x;
let y;
let z;

let a;
let b;
let c;

let dx;
let dy;
let dz;

let dt;

let i;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  background(0);
  stroke(255);
  strokeWeight(0.7);
  
  x = 0.1;
  y = 0.1;
  z = 0.1;
  
  a = 10;
  b = 28;
  c = 8.0/3.0;
  
  dt = 0.01;
  
  i = 0;
}

function draw() {

  translate(0,0,-80);
  
  rotateZ(i/9999);
  i++;
  if(i > 0)
  scale(width/100/1.3);
  px = x;
  py = y;
  pz = z;
  
  dx = (a * (y - x))       * dt;
  dy = (x * (b - z) - y)   * dt;
  dz = ((x * y) - (c * z)) * dt;
  
  x = x + dx;
  y = y + dy;
  z = z + dz;
  
  line(px,py,pz, x,y,z);
  
  
}