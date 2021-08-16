var sunX;
var sunY;
var sunSize;
var radius1;
var angle1;
var angle2;
var vel1;
var vel2
var p1X;
var p1X;


function setup() { 
  createCanvas(600, 600);
  
  ellipseMode(CENTER);
  sunX = width/2;
  sunY = height/2;
  sunSize = 100;
  radius1 = 200;
  radius2 = 60;
  vel1 = 0.005;
  vel2 = 0.05
  angle1 = 0;
  angle2 = 0;
} 

function draw() { 
  background(20);
  stroke(0);
  strokeWeight(1);
  planet1();
  planet2(planet1());
  fill(255,255,0)
  ellipse(sunX, sunY, sunSize,sunSize);
  sunShine();
  angle1 += vel1;
  angle2 += vel2;
}

function sunShine(){
  for(var i = 0; i < 300; i+= 1){
      var lysX = width/2 + i * cos(i);
      var lysY = width/2 + i * sin(i);
      noStroke();
      fill(255-i/2,255-i/2,255-i,10);
      ellipse(lysX,lysY,100,100)
  }
}

function planet1(){
  var size = sunSize/1.5;
  p1X = sunX + radius1 * cos(angle1);
  p1Y = sunY + radius1 * sin(angle1);
  fill(0,0,255)
  ellipse(p1X, p1Y, size,size);
  var v = createVector(p1X,p1Y);
  return v;
}
function planet2(v){
  var size = sunSize/4;
  var x = v.x + radius2 * cos(angle2);
  var y = v.y + radius2 * sin(angle2);
  fill(150,50,50)
  ellipse(x, y, size,size);
}