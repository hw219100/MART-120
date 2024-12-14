// COLOR VARIABLES 
var cactusColor;
var sunColor;
var mountainColor;
var backgroundColor;
var sandColor;

// ARRAY FOR STARS
var starXs = [];
var starYs = [];
var amountStars = 100;
var starSpeedX = 0.5;
var starsVisible = false;

// SET UP FUNCTION
function setup() {
  createCanvas(600, 400);
  cactusColor = color(153, 153, 51);
  sunColor = color(244, 208, 63);
  mountainColor = color(229, 152, 102);
  backgroundColor = color(174, 214, 241);
  sandColor = color(245, 203, 167);

  // STAR PLACEMENT
  for (var i = 0; i < amountStars; i++) {
    starXs.push(random(width));
    starYs.push(random(height / 2));
  }
}

// IF VISIBLE, DRAW STARS FUNCTION
function draw() {
  drawScene();
  if (starsVisible) {
    drawStars();
  }
}

// DRAW SCENE
function drawScene() {
  background(backgroundColor); 
  // mountains
  fill(mountainColor); 
  noStroke();
  triangle(0, 350, 150, 250, 300, 350);  
  triangle(200, 350, 400, 250, 600, 350);  
  triangle(100, 350, 250, 280, 400, 350);  
  // sand
  fill(sandColor);
  noStroke();
  rect(0, height - 50, width, 50);
  // sun
  fill(sunColor);
  ellipse(100, 100, 100);
  // cacti #1
  // body
  fill(cactusColor);
  rect(450, 200, 30, 160, 15, 15, 4, 4);
  // arm L
  rect(420, 215, 25, 60, 15, 15, 0, 0);
  rect(420, 275, 35, 25, 0, 0, 0, 25);
  // arm R
  rect(485, 225, 25, 60, 15, 15, 0, 0);
  rect(470, 285, 40, 25, 0, 0, 25, 0);
  // cactus #2
  fill(cactusColor);
  // cactus body
  rect(200, 220, 30, 160, 15, 15, 4, 4);
  // arm L
  rect(170, 235, 25, 60, 15, 15, 0, 0);
  rect(170, 295, 35, 25, 0, 0, 0, 25);
  // arm R
  rect(235, 245, 25, 60, 15, 15, 0, 0);
  rect(220, 305, 40, 25, 0, 0, 25, 0);
}

// DRAW STARS SPEED DIRECTION
function drawStars() {
  fill(255); 
  noStroke();
  for (var i = 0; i < starXs.length; i++) {
    ellipse(starXs[i], starYs[i], 2, 2); 
    // star direction 
    starXs[i] += starSpeedX;
    // loop stars
    if (starXs[i] > width) {
      starXs[i] = 0;
      starYs[i] = random(height / 2); 
    }
  }
}

// WHEN MOUSE IS CLICKED NIGHT 
function mousePressed() {
  backgroundColor = color(52, 73, 94 );
  mountainColor = color(46, 64, 83);
  cactusColor = color(27, 38, 49);
  sunColor = color(254, 249, 231);
  sandColor = color(33, 47, 60)
  starsVisible = true;
  // after mouse is pressed make stars
  starsVisible = true;
  // randomize stars
  for (var i = 0; i < amountStars; i++) {
    starXs[i] = random(width); 
    starYs[i] = random(height / 2); 
  }
}

