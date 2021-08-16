let b = [];
let x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  
  for(let i = 0; i < 20; i++){
    b.push(new Bubble(
        random(windowWidth/20,windowWidth-windowWidth/20),
        random(windowHeight/20,windowHeight-windowHeight/20)
      ));
  }
  
}

function draw() {
  background(220);
  for(let i = 0; i < b.length; i++){
    b[i].walls();
    b[i].move();
    b[i].show();
  }
}

class Bubble{
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = random(windowWidth/6,windowHeight/15);
    this.xSpeed = random(random(-4,-2),random(2,4));
    this.ySpeed = random(random(-4,-2),random(2,4));
    this.color = random(100,255);
    console.log("1 : " + random(random(-4,-2),random(2,4)));
    console.log("2 : " + random(-4,4));
  }
  
  getSpeed(){
    return [this.xSpeed, this.ySpeed];
  }
  getPos(){
    return [this.x,this.y]
  }
  bounce(a, b){
    
    this.xSpeed += ( a[0] / 2 ) + ( a[1] / 2 );
    this.ySpeed += ( a[0] / 2 ) + ( a[1] / 2 );
  }
  
  show(){
    console.log("test3")
    fill(45,45,this.color,this.color*1.5);
    stroke(45,45,this.color-this.color/2);
    ellipse(this.x,this.y,this.size,this.size);
  }

  move(){
    
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  walls(){
   
    if( this.x < this.size/2){
    this.x = this.size/2;
    this.xSpeed *= -1;
    }
    if( this.x > width - this.size/2){
    this.x = width - this.size/2;
    this.xSpeed *= -1;
    }
    if( this.y < this.size/2){
    this.y = this.size/2;
    this.ySpeed *= -1;
    }
    if( this.y > height - this.size/2){
    this.y = height - this.size/2;
    this.ySpeed *= -1;
    }
  }
  
  
  
}