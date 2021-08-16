class Walker{

constructor(x,y){
  this.pos = createVector(mouseX,mouseY);
  this.vel = createVector(0,0);
  this.diameter = random(10,50);
  this.ranColor = color(random(255),random(255),random(255));
}
  update(){
    this.acceleration = 
    createVector(random(-0.2,0.2),random(-0.2,0.2));
    
    this.pos.add(this.vel);
    this.vel.add(this.acceleration);
    
    if(this.vel.x > 15){
      this.vel.x = 4;
    }
    if(this.vel.x < -15){
      this.vel.x = -4;
    }
    
    if(this.vel.y > 15){
      this.vel.y = 4;
    }
    if(this.vel.y < -15){
      this.vel.y = -4;
    }
    
  }
  show(){
    fill(this.ranColor);
    stroke(0);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.diameter,this.diameter);
  }
  
  walls(){
    if(this.pos.x > width){
      this.pos.x = 0;
    }
    if(this.pos.x < 0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = height;
    }
  }
  
}