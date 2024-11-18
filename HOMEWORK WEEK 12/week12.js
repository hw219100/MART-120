// VARIABLES

// character variable
var characterX = 100;
var characterY = 100;

// movement variables
var w = 87, s = 83, a = 65, d = 68;

// enemy variables
var firstEnemyX = 30, firstEnemyY = 50, firstEnemyXSpeed, firstEnemyYSpeed;
var secondEnemyX = 300, secondEnemyY = 400, secondEnemyXSpeed, secondEnemyYSpeed;

// mouse enemy variables
var mouseEnemyX = -100, mouseEnemyY = -100;

// canvas width & height
var canvasWidth = 500, canvasHeight = 600;
var exitX = canvasWidth - 50, exitY = canvasHeight - 50;

// FUNCTIONS

// setup function
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    controlEnemySpeeds();
}

// control speed function
function controlEnemySpeeds() {
    firstEnemyXSpeed = Math.floor(Math.random() * 5) + 1;
    firstEnemyYSpeed = Math.floor(Math.random() * 5) + 1;
    secondEnemyXSpeed = Math.floor(Math.random() * 5) + 1;
    secondEnemyYSpeed = Math.floor(Math.random() * 5) + 1;
}

// create character function
function createPlayer() {
    fill(238, 184, 203);
    circle(characterX, characterY, 40);
}

// player movement function
function movePlayer() {
    if (keyIsDown(w)) characterY -= 5;
    if (keyIsDown(s)) characterY += 5;
    if (keyIsDown(a)) characterX -= 5;
    if (keyIsDown(d)) characterX += 5;
}

// draw enemy when mouse is clicked function
function drawObjectOnMouse() {
    fill(170, 168, 249);
    circle(mouseEnemyX, mouseEnemyY, 50);
}

// draw enemy function
function createEnemy() {
    fill(157, 251, 211);
    rect(firstEnemyX, firstEnemyY, 60, 60);
    fill(186, 255, 171);
    rect(secondEnemyX, secondEnemyY, 60, 60);
}

// move and loop first enemy function
function moveFirstEnemy() {
    firstEnemyX += firstEnemyXSpeed;
    firstEnemyY += firstEnemyYSpeed;
    if (firstEnemyX > width) firstEnemyX = 0;
    else if (firstEnemyX < 0) firstEnemyX = width;
    if (firstEnemyY > height) firstEnemyY = 0;
    else if (firstEnemyY < 0) firstEnemyY = height;
}

// move and loop second enemy function
function moveSecondEnemy() {
    secondEnemyX += secondEnemyXSpeed;
    secondEnemyY += secondEnemyYSpeed;
    if (secondEnemyX > width) secondEnemyX = 0;
    else if (secondEnemyX < 0) secondEnemyX = width;
    if (secondEnemyY > height) secondEnemyY = 0;
    else if (secondEnemyY < 0) secondEnemyY = height;
}

// create border function
function drawBorders() {
    noStroke();
    fill(170, 168, 248);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, 10);
    rect(width - 10, 0, 10, height);
}

// create exit function
function drawExit() {
    fill(222, 176, 255);
    rect(exitX, exitY, 50, 500);
    textSize(16);
    fill(170, 168, 248);
    text("EXIT", exitX + 5, exitY + 30);
}

// winner text function
function createWinnerMessage() {
    if (characterX > exitX && characterY > exitY) {
        textSize(32);
        fill(0);
        text("Winner!", width / 2 - 70, height / 2.5);
        noLoop();
    }
}

// mouse click to place enemy
function mouseClicked() {
    mouseEnemyX = mouseX;
    mouseEnemyY = mouseY;
}

// draw function
function draw() {
    background(222, 176, 255);
    drawBorders();
    drawExit();
    createPlayer();
    movePlayer();
    drawObjectOnMouse();
    createEnemy();
    moveFirstEnemy();
    moveSecondEnemy();
    createWinnerMessage();
}