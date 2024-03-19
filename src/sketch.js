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
  drawDino (200, 400, 0.5);
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

function drawDino(x, y, s) {
  push();
  translate(x, y);
  scale(s);
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
