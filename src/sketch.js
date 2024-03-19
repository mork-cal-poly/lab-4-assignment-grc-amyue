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
