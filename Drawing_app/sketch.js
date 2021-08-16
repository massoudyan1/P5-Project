var c = "blue";
var count = 1;
var canv;

function setup() {
  canv = createCanvas(windowWidth, windowHeight);
	background(220);
  
  strokeWeight(1);
}

function draw() {
    
  if (mouseIsPressed) {
	stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  noStroke();
  fill("red");
  ellipse(20, height-20, 40, 40);

  fill("blue");
  ellipse(70, height-20, 40, 40);
  
  fill("white");
  ellipse(120,height-20,40,40)
  
  
  fill("white");
  ellipse(170,height-20,40,40)
  fill("black")
  ellipse(170,height-20,2,2)
  
  fill("white");
  ellipse(220,height-20,40,40)
  fill("black")
  ellipse(220,height-20,4,4)
  
  fill("white");
  ellipse(270,height-20,40,40)
  fill("black")
  ellipse(270,height-20,8,8)
  
  fill("white");
  ellipse(320,height-20,40,40)
  fill("black")
  ellipse(320,height-20,30,30)
}

function keyPressed() {
 if(keyCode == 32) {
   saveCanvas(canv, `drawing${count}`, `png`)
 }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > height-40 && mouseY < height) {
    c = "red";
  }
  
  if (mouseX > 50 && mouseX < 90 && mouseY > height-40 && mouseY < height) {
    c = "blue";
  }
  
  if (mouseX > 100 && mouseX < 140 && mouseY > height-40 && mouseY < height) {
    c = 220;
  }
  
  if (mouseX > 150 && mouseX < 190 && mouseY > height-40 && mouseY < height) {
    strokeWeight(1);
  }
  if (mouseX > 200 && mouseX < 240 && mouseY > height-40 && mouseY < height) {
    strokeWeight(3);
  }
  
  if (mouseX > 250 && mouseX < 290 && mouseY > height-40 && mouseY < height) {
    strokeWeight(7);
  }
  if (mouseX > 300 && mouseX < 340 && mouseY > height-40 && mouseY < height) {
    strokeWeight(30);
  }
}