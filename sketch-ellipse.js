//creates a typhoon from a list of strings in file lexicon.js

//reference for motion of a single string around an ellipse: 
//https://stackoverflow.com/questions/68528749/how-do-i-rotate-text-around-an-oval

let spinSpeed = 0.01;
let angle = 360;
let currentOffset = 180;

let space2 = '  ';
let space4 = '    ';
let space8 = space4 + space4;
let space16 = space8 + space8;
let space32 = space16 + space16;
let space64 = space32 + space32;

function setup() {
  
  //createCanvas(canvasWidth, canvasHeight);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textSize(12);
  textFont("monospace");
  
  // drawing each letter from it's center point makes determining the angle and
  // the spacing a little easier I think.
  textAlign(CENTER, BASELINE);
  
  // shuffle list of words to create a different typhoon each time
  newsShuff = shuffle(news);

}

function draw() {
 
  background('#151539');
  noFill();

  loopEye();
  loopEyeWall();
  loopEyeWall2();
  loopRainBand();
  loopRainBand1();
  loopRainBand2();
  loopRainBand3();

  fill('#2a2a2a');
  textAlign(LEFT);
  rect(windowWidth/2 - 170, 10, 340, 140);
  fill('white');
  let d = day();
  text('20 TYPHOONS A YEAR\nPHILIPPINE AREA OF RESPONSIBILITY', windowWidth/2-155, 30);
  
  text('a mass of words that rotates\naround a center of low news coverage', windowWidth/2-155, 80);
  text('from a collection of weather news headlines\nin the Philippines', windowWidth/2-155, 120);
  
}

function loopEye() {
  //layer 0 and 1
  for (let j = 0; j < 2; j++){
    let orbit = (j+40)+j*30;
    ellipseText(newsShuff[j], windowWidth/2, windowHeight/2, orbit+10, orbit, 180+j*90, 0.01);
  }
}

//newsShuff.length-
function loopEyeWall() {
  //layer 2, 3
  //start 2, end 3+4 = 7
  for (let j = 2; j < 4; j++){
    
    let orbit = (j+40)+j*32;
    let jEyeWall = 2 + (j-2) + (j-2)*5;
    // 2 = start index in news array
    // 5 = drops in a cloud
    // j-2 = relative index from start index

    let cloud = newsShuff[jEyeWall] + space4 
    + newsShuff[jEyeWall + 1] + space2
    + newsShuff[jEyeWall + 2] + space2
    + newsShuff[jEyeWall + 3] + space2
    + newsShuff[jEyeWall + 4];
    
    ellipseText(cloud, windowWidth/2, windowHeight/2, orbit, orbit+20, 90+j*10, 0.01);
  }
}

function loopEyeWall2() {
  //start 4, end 48+7 = 55
  for (let j = 4; j < 8; j++){
    
    let orbit = (j+40)+j*36;
    let jEyeWall2 = 12 + (j-4) + (j-4)*8;
    
    let cloud = newsShuff[jEyeWall2] + space4 
    + newsShuff[jEyeWall2 + 1] + space8
    + newsShuff[jEyeWall2 + 2] + space4
    + newsShuff[jEyeWall2 + 3] + space2
    + newsShuff[jEyeWall2 + 4] + space4
    + newsShuff[jEyeWall2 + 5] + space2
    + newsShuff[jEyeWall2 + 6] + space4
    + newsShuff[jEyeWall2 + 7];
    ellipseText(cloud, windowWidth/2, windowHeight/2, orbit+10, orbit+20, j*120, 0.01);
  }
}

function loopRainBand() {
  // end 91+7 = 98
  for (let j = 8; j < 12; j++){
    
    let orbit = (j+60)+j*36;
    let jRainBand = 55 + (j-8) + (j-8)*8;

    let cloud = newsShuff[j*(j+1)] + space4 
    + newsShuff[jRainBand] + space8
    + newsShuff[jRainBand + 1] + space4 
    + newsShuff[jRainBand + 2] + space4
    + newsShuff[jRainBand + 3] + space2
    + newsShuff[jRainBand + 4] + space16
    + newsShuff[jRainBand + 5] + space32
    + newsShuff[jRainBand + 6] + space16
    + newsShuff[jRainBand + 7];
    ellipseText(cloud, windowWidth/2 + 5, windowHeight/2, orbit+20, orbit+10, 90+j*20, 0.01);
  }
}

function loopRainBand1() {
  //end 131 + 9 = 140
  for (let j = 12; j < 15; j++){
    
    let orbit = (j+60)+j*36;
    let jRainBand1 = 98 + (j-12) + (j-12)*10;

    let cloud = newsShuff[j*(j+1)] + space8 
    + newsShuff[newsShuff.length-j*(j+2)] + space2
    + newsShuff[newsShuff.length-j*(j+3)] + space8 
    + newsShuff[newsShuff.length-j*(j+4)] + space4
    + newsShuff[newsShuff.length-j*(j+5)] + space16
    + newsShuff[newsShuff.length-j*(j+6)] + space4
    + newsShuff[newsShuff.length-j*(j+7)] + space8
    + newsShuff[newsShuff.length-j*(j+8)] + space8
    + newsShuff[newsShuff.length-j*(j+9)];
    ellipseText(cloud, windowWidth/2 + 5, windowHeight/2, orbit+20, orbit+30, 180+j*20, 0.01);
  }
}

function loopRainBand2() {
  //end 188+9 = 197
  for (let j = 16; j < 20; j++){
    let orbit = (j+40)+j*36;
    let jRainBand2 = 140 + (j-16) + (j-16)*10;

    let cloud = newsShuff[jRainBand2] + space16 
    + newsShuff[jRainBand2 + 1] + space32
    + newsShuff[jRainBand2 + 2] + space8 
    + newsShuff[jRainBand2 + 3] + space8
    + newsShuff[jRainBand2 + 4] + space16
    + newsShuff[jRainBand2 + 5] + space4
    + newsShuff[jRainBand2 + 6] + space16
    + newsShuff[jRainBand2 + 7] + space8
    + newsShuff[jRainBand2 + 8];
    ellipseText(cloud, windowWidth/2, windowHeight/2, orbit+10, orbit+20, (j*40), 0.01);
  }
}

function loopRainBand3() {
  for (let j = 22; j < 25; j++){
    let orbit = (j+30)+j*32;
    let jRainBand2 = 197 + (j-16) + (j-16)*10;

    let cloud = newsShuff[j*(j+1)] + space16 
    + newsShuff[newsShuff.length-j*(j+2)] + space8
    + newsShuff[newsShuff.length-j*(j+3)] + space4 
    + newsShuff[newsShuff.length-j*(j+4)] + space32
    + newsShuff[newsShuff.length-j*(j+5)] + space16
    + newsShuff[newsShuff.length-j*(j+6)] + space4
    + newsShuff[newsShuff.length-j*(j+7)] + space4
    + newsShuff[newsShuff.length-j*(j+8)] + space32
    + newsShuff[newsShuff.length-j*(j+9)];
    ellipseText( '#' + String(j) + '# ' + cloud, windowWidth/2, windowHeight/2, orbit+80, orbit+30, 180+(j*10), 0.01);
  }
}


function ellipseText(words, locX, locY, ellipseWidth, ellipseHeight, currentOffset, spinSpeed){
  // words - clouds
  // locX, locY - eye
  // ellipseWidth, ellipseHeight
  // currentOffset - variable offset of each character, in degrees, cloud start in the ellipse

  let sourceCharacters = words.split("");
  
  // Draw an ellipse. Use for diagnosis. Are paths overlapping?
  //stroke("rgba(255, 255, 255, 0.10)");
  //noFill();
  //ellipseMode(CENTER);
  //ellipse(locX, locY, ellipseWidth, ellipseHeight);


  // Create a revolving angle
  if (angle > 0) {
    angle = angle - spinSpeed;
  } else {
    angle = 360;
  }

  // Set variables for trigonometry
  const widthR = ellipseWidth / 2;
  const heightR = ellipseHeight / 2;
  let dx, dy;

  // Loop through each chracter and place on oval edge
  for (let i = 0; i < sourceCharacters.length; i++) {
    
    push();

    // Prepare for operations around circle
    translate(locX, locY);

    // This give a more accurate position. See: https://math.stackexchange.com/a/2258243/771335
    let r = widthR * heightR / sqrt(widthR ** 2 * sin(angle + currentOffset) ** 2 + heightR ** 2 * cos(angle + currentOffset) ** 2);
    dx = r * cos(angle + currentOffset);
    dy = r * sin(angle + currentOffset);

    translate(dx, dy);
    // This is the derivative of the equation for an ellipse.
    // Calculating the derivative at X gives us the current slope.
    let tangent = -1 * (heightR ** 2) * dx / (widthR ** 2 * sqrt(heightR ** 2 * (widthR ** 2 - dx ** 2) / widthR ** 2));
    if (dy < 0) {
      tangent *= -1;
    }

    // Use the tangent slope to determine rotation angle
    let rotation = atan2(tangent, 1);
    if (dy > 0) {
      rotation += 180;
    }
    rotate(rotation);

    let charWidth = textWidth(sourceCharacters[i]);
    //stroke("rgba(255, 255, 255, 0.25)");
    //rect(-charWidth / 2, 0, charWidth, -18);
    fill("white");
    text(sourceCharacters[i], 0, 0);

    // find the angle between the vector to the center of the current letter
    // and the vector to the center of the next letter projected onto the
    // current tangent line. This is a bit of a hack.

    if (i + 1 < sourceCharacters.length) {
      let spacing = (charWidth + textWidth(sourceCharacters[i + 1])) / 2;
      let vCur = createVector(dx, dy);
      let vNext =
        vCur.copy().add(
          createVector(spacing * cos(rotation), spacing * sin(rotation))
        );

      currentOffset += vCur.angleBetween(vNext);
    }
    pop();
  }
}

// refresh screen when window is resized
// canvas fits window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}