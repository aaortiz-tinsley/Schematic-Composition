/* In 1933, Sophie Taeuber-Arp created Schematic Composition, an art piece composed of oil and wood on composition board. Almost 90 years later, I humbly attempt a recreation of that piece using p5.js <3 */

//Global Variables
var eggshell = (242, 237, 213);
var ink = (38, 26, 36);

function setup() {
  //The parameters of createCanvas are system variables, used to run a full-screen program on any display size
  createCanvas(displayWidth, displayHeight);
  background(ink);
}

function draw() {
  //To create five rectangles along the left side of the screen, I used a for loop to declare a variable, created a relational expression to evaluate the value of this variable, and then initiated updates to the variable’s value.
  //(init; test; update)
  for (rectY = 6 * 3 + 32; rectY <= 550; rectY += 120) {
    fill(eggshell);
    noStroke();
    // rect(x, y, w, h);
    rect(50, rectY, 200, 60);
  }
  //Bottom Three Circles (one alone, two connected) | 1st Section
  stroke(ink);
  // circle(x, y, d);
  circle(80,800,60);
  circle(165, 800, 60);
  circle(224, 800, 60);
  // Verticle Line of Circles | 1st Section
  for (circleY = 80; circleY <= 320; circleY += 120) {
    // I used a Conditional Expression to determine the position and color of the circles
    //if 'circleY' multiplied by 20 is greater than 1300, 'eggshell' circles will be drawn; else, 'ink' will be the color of the circles
    if (circleY * 20  > 1300) {
      fill(eggshell);
      circle(360, circleY, 60);
    } else {
      fill(ink);
      stroke(eggshell);
      circle(360, circleY, 60);
    }
  }
  circle(360, 560, 60);
  circle(360, 800, 60);
  //Second Section Begin
  //Four Rectangles of the Same Size | 2nd Section
  for (smRectY = 50; smRectY <= 500; smRectY += 120) {
    fill(eggshell);
    noStroke();
    rect(470, smRectY, 100, 60);
  }
  //Two smaller rectangles, half the width | 2nd Section
  stroke(ink);
  fill(eggshell);
  rect(470, smRectY, 50, 60);
  fill(eggshell);
  rect(520, smRectY, 50, 60);
  //Bottom Four Circles, connected | 2nd Section
  for (fourCircleX = 497; fourCircleX <= 700; fourCircleX += 59) {
    stroke(ink);
    fill(eggshell);
    circle(fourCircleX,800,60);
  }
  // Two Verticle Lines of Circles | 2nd Section
  for (circleLine = 83; circleLine <= 580; circleLine += 60) {
    fill(eggshell);
    circle(679, circleLine, 60);
    circle(800, circleLine, 60);
  }
  circle(800,800,60);
  //Third Section Begin
  //Horizontal Small Rectangles of the Same Size (5)| 3rd Section
  for (smRectX = 903; smRectX <= 1120; smRectX += 50) {
    stroke(ink);
    fill(eggshell);
    rect(smRectX, 50, 50, 60);
  }
  //Large Rectangle
  noStroke();
  rect(903, 180, 250, 112);
  //Verticle Line of Rectangles along Bottom Right (4)
  for (meRectY = 352; meRectY <= 800; meRectY += 138) {
    fill(eggshell);
    rect(903, meRectY, 140, 60);
  }
   //Verticle Line of Circles along Bottom Right (4)
  for (circleSpace = 384; circleSpace <= 800; circleSpace += 138) {
    stroke(ink);
    fill(eggshell);
    circle(1125, circleSpace, 60);
  }
}


