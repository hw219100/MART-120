// VARIABLES

// character variable
var characterX = 100;
var characterY = 100;

// movement variable
var w = 87, s = 83, a = 65, d = 68;

// arrays for enemies
var enemyXs = [];
var enemyYs = [];
var enemySize = [];
var enemyXSpeed = [];
var enemyYSpeed = [];

// mouse enemy variables
var mouseEnemyX = -100, mouseEnemyY = -100;

// canvas width & height
var canvasWidth = 500, canvasHeight = 600;
var exitX = canvasWidth - 50, exitY = canvasHeight - 50;

// FUNCTIONS 

// setup function 
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // initialize enemies
    for (var i = 0; i < 10; i++) { 
        enemyXs[i] = getRandomNumber(canvasWidth);
        enemyYs[i] = getRandomNumber(canvasHeight);
        enemySize[i] = getRandomNumber(40); 
        enemyXSpeed[i] = Math.floor(Math.random() * 4) + 1; 
        enemyYSpeed[i] = Math.floor(Math.random() * 4) + 1;
    } 
}

// random number function 
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
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

// draw enemies function 
function drawEnemies() {
    fill(157, 251, 211);
    for (var i = 0; i < enemyXs.length; i++) {
        rect(enemyXs[i], enemyYs[i], enemySize[i], enemySize[i]);

        // move & loop enemies
        enemyXs[i] += enemyXSpeed[i];
        enemyYs[i] += enemyYSpeed[i];
        if (enemyXs[i] > width) enemyXs[i] = 0;
        if (enemyXs[i] < 0) enemyXs[i] = width;
        if (enemyYs[i] > height) enemyYs[i] = 0;
        if (enemyYs[i] < 0) enemyYs[i] = height;
    }
}

// draw borders function
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
    drawEnemies();
    createWinnerMessage();
}

