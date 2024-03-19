let clicked = false;
let y = 200;
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
  drawDino (190, 400);

  if(clicked) {
    y = y < 400 ? y + 1 : 400;
    s = s < 1 ? s + 0.01: 1;
  }
  
  drawCloud(200, y, s);
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

function mouseClicked() {
 if (mouseX > 150 && 
     mouseX < 250 && 
     mouseY > 72 && 
     mouseY < 128)
  {
    clicked = !clicked;
  }
}