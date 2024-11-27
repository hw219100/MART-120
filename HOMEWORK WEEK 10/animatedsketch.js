var eyePosition = 0;
var eyeDirection = 1;
var eyebrowPosition = 0;
var eyebrowDirection = 2;
var noseXMovement= 0;
var noseYMovement= 0;
var noseDirectionX= 1;
var noseDirectionY= 1;
var size = 12;
var count= 0;
var sizeDirection= 2;
///
function setup() {
  createCanvas(400, 400);
}

function draw() {  
  background(240, 128, 128);
  //Head&Base
  fill(101,67,33);
  rect(90, 50, 220, 260);
  fill(255, 160, 122);
  rect(150, 239, 100, 100);
  fill(255, 150, 122);
  ellipse(200, 150, 200, 205);
  
  //Eyes&Movement
  fill(255);
  ellipse(150 + eyePosition, 155, 55, 60);
  ellipse(250 + eyePosition, 155, 55, 60);
  fill(0);
  ellipse(150 + eyePosition, 155, 40, 40);
  ellipse(250 + eyePosition, 155, 40, 40);
  eyePosition += eyeDirection;
  if (eyePosition > 10 || eyePosition < -10) {
    eyeDirection *= -1;
  }
  //Eyebrows&Movement
  stroke(0);
  line(125, 115 + eyebrowPosition, 175, 120 + eyebrowPosition); // Left eyebrow
  line(225, 120 + eyebrowPosition, 275, 115 + eyebrowPosition); // Right eyebrow
  eyebrowPosition += eyebrowDirection;
  if (eyebrowPosition > 5 || eyebrowPosition < -5) {
    eyebrowDirection *= -1;
  }
  //FaceDetails
  fill(0);
  point(60, 40);
  fill(255, 150, 122);
  arc(200, 200, 50, 50, 0, 160);
  //Nose&Movement
  fill(233, 150, 122);
  triangle(
    200 + noseXMovement, 170 + noseYMovement, 
    190 + noseXMovement, 190 + noseYMovement, 
    210 + noseXMovement, 190 + noseYMovement
  );
   noseXMovement += noseDirectionX;
  noseYMovement += noseDirectionY;
  if (noseXMovement > 10 || noseXMovement < -10) {
    noseDirectionX *= -1;
  }
  if (noseYMovement > 5 || noseYMovement < -5) {
    noseDirectionY *= -1;
  }
  //Body
  fill(159, 226, 191);
  rect(150, 275, 100, 30); 
  fill(159, 226, 191); 
  rect(100, 300, 200, 100); 
  fill(100, 60, 20);
  rect(110, 50, 180, 60);
  //Signature&Movement
  text('Honor Westcott', 315, 390);
  fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
}