let b = [];
let bCount;

let bSize;
let bVel;
let bPos;
function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
  
  bCount = 5;
  
  for(let i = 0; i < bCount; i++){
    bSize = random(40,60);
    bVel = createVector(random(-4,4),random(-4,4));
    bPos = createVector(random(0+bSize/2,width-bSize/2),random(0+bSize/2,height-bSize/2));
    b.push(new Ball(bPos.x,bPos.y,bSize/2,bVel, int(random(2,20)) ))
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < bCount; i++){
    b[i].show();
    b[i].update();
    b[i].walls();
  }
}

class Ball {
  constructor(x,y,radius,velocity, seperate){
    this.pos = createVector(x,y);
    this.r = radius;
    this.size = radius * 2;
    this.vel = velocity;
    this.color = color(random(75,255),random(75,255),random(75,255));
    this.pies = seperate;
    
    strokeWeight(1);
    stroke(0,0,0);
    
    this.rotation = 0;
  }
  
  show(){
    
    fill(this.color);
    ellipse(this.pos.x,this.pos.y,this.size);
    
    push();
    translate(this.pos.x,this.pos.y);

    
    for(let i = 0; i < this.pies; i++){
      line(0,0,this.r,0);
      rotate(360/this.pies);
    }
    rotate()
    
    pop();
    
    
  }
  
  update(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  
  walls(){
    if(this.pos.x <= 0+this.r || this.pos.x >= width-this.r) {
      this.vel.x *= -1;
      this.color = color(random(75,255),random(75,255),random(75,255));
    }
    if(this.pos.y <= 0+this.r || this.pos.y >= height-this.r) {
      this.vel.y *= -1;
      this.color = color(random(75,255),random(75,255),random(75,255));
    }
  }
  
  
  getPos(){
    return createVector(this.pos.x, this.pos.y);
  }
  
  
  
}