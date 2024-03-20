let clicked = false;
let cloudX = 200;
let cloudY = 200;
let dinoX = 190;
let s = 0.5;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(131, 187, 203);
  drawBackground(200, 400);
  drawBear ();
  drawDino (dinoX, 400);

  if(clicked) {
    cloudY = cloudY < 400 ? cloudY + 1 : 400;
    s = s < 1 ? s + 0.01: 1;
  }
  drawCloud(cloudX, cloudY, s);

  if(cloudY == 400) {
    dinoX = dinoX - 1.5;
    cloudX = cloudX - 1.5;
  }
}

function drawBackground(x, y) {
  push();
  translate(x, y);

  //hill
  fill(173, 206, 144);
  noStroke();
  ellipse(150, 0, 900, 500);
  
  //left cloud
  fill(163, 208, 214);
  noStroke();
  ellipse(-95, -340, 40, 40);
  ellipse(-120, -350, 60, 60);
  ellipse(-150, -335, 30, 30);
  ellipse(-165, -333, 20, 20);
  
  //right cloud
  ellipse(95, -305, 40, 40);
  ellipse(120, -315, 60, 60);
  ellipse(150, -300, 30, 30);
  ellipse(165, -298, 20, 20);
  
  pop();
}

function drawDino(x, y) {
  push();
  translate(x, y);
  //scale(s);
  fill(91, 139, 99);
  noStroke();
  
  //body
  ellipse(0, -175, 200, 100);
  
  //front right leg
  rect(-100, -175, 20, 75);
  ellipse(-105, -100, 50, 20);
  
  //front left leg
  rect(-60, -175, 25, 90);
  ellipse(-60, -85, 50, 20);
  
  //back right leg
  rect(25, -175, 20, 75);
  ellipse(20, -100, 50, 20);
  
  //back left leg
  rect(65, -175, 25, 90);
  ellipse(65, -85, 50, 20);
  
  //neck
  rect(-100, -300, 45, 125);
  
  //head
  ellipse(-95, -300, 80, 60);
  
  //tail
  rotate(-PI/6);
  ellipse(180, -115, 50, 10);
  rotate(PI/6);
  
  //eyes
  fill(0);
  noStroke();
  ellipse(-120, -300, 10);
  ellipse(-105, -300, 8);
  
  pop();
}

function drawCloud(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(222, 236, 240);
  noStroke();
  
  ellipse(0, -175, 200, 100);
  ellipse(-100, -180, 50);
  ellipse(-88, -203, 30);
  ellipse(-60, -208, 45, 30);
  ellipse(-35, -210, 55);
  ellipse(-15, -220, 30);
  ellipse(0, -220, 60, 20);
  ellipse(45, -210, 50);
  ellipse(65, -205, 45, 30);
  ellipse(85, -190, 30);
  ellipse(100, -175, 20, 30);
  ellipse(85, -158, 35);
  ellipse(65, -140, 45, 30);
  ellipse(45, -145, 50);
  ellipse(0, -130, 60, 20);
  ellipse(-25, -130, 30);
  ellipse(-50, -150, 55);
  ellipse(-85, -150, 45, 30);

  pop();

  if (clicked) {
    if(drawCloud.y < 300) {
      drawCloud.y = drawCloud.y + 1;
    } else {
      drawCloud.y = 0;
    }
  }
}

function drawBear() {
  push();
  translate(270, 255);
  
  // bear 
  fill(148, 118, 97);
  noStroke(); 

  scale(0.5);
  translate()
    ellipse(-150, -45, 50, 65); // Body
    ellipse(-175, -110, 25, 25); // left ear
    ellipse(-125, -110, 25, 25); // right ear
    ellipse(-150, -90, 50, 50); // head
    ellipse(-165, -65, 40, 20); // left arm
    ellipse(-135, -65, 40, 20); // right arm
    ellipse(-162, -20, 40, 20); // left leg
    ellipse(-138, -20, 40, 20); // right leg
    
    fill(0);
    noStroke();
    ellipse(-160, -95, 8, 8); // left eye
    ellipse(-140, -95, 8, 8); // right eye
    ellipse(-150, -90, 8, 5); // nose
    
    fill(148, 118, 97);
    stroke(2);
    arc(-153, -88, 6, 5, 0, PI);
    arc(-146, -88, 6, 5, 0, PI);
  
  pop();
}

function mouseClicked() {
 if (mouseX > 150 && 
     mouseX < 250 && 
     mouseY > 72 && 
     mouseY < 128)
  {
    clicked = !clicked;
  }
}