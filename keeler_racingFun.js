var bitmojiX=17;
var bitmojiY=71;


var frogX = 34;
var frogY = 346;

var bunnyX=-148;
var bunnyY=188;

var bitmojiSpeed= random(1,5);
var bunnySpeed= random(1,5);
var frogSpeed= random(1,5); 


draw= function() {
var drawBitmoji=function (bitmojiSpeed) {
    
    noStroke();
    background(255, 255, 255);
    fill (255, 205, 148);  //skin tone
    ellipse (bitmojiX,bitmojiY,84,100);   //head
    fill(255, 255, 255);
    arc (bitmojiX-43,bitmojiY+37,29,55,0,360);  //left indent
    arc (bitmojiX+41,bitmojiY+37,29,55,0,360); //right indent
    fill(90, 56, 37); //hair tone 
    quad (bitmojiX-49,bitmojiY,bitmojiX-40,bitmojiY-32,bitmojiX-7,bitmojiY-46,bitmojiX-27,bitmojiY-4); //left hair
    quad(bitmojiX+48,bitmojiY,bitmojiX+36,bitmojiY-33,bitmojiX+9,bitmojiY-48,bitmojiX+28,bitmojiY-4); //right hair
    ellipse(bitmojiX-2,bitmojiY-34,74,32);  //top hair
    fill (115,23,23);
    ellipse (bitmojiX-15,bitmojiY,8,6); //left eye
    ellipse (bitmojiX+12,bitmojiY,8,6);  //right eye
    fill(255,205,148);
    stroke(3, 3, 3);
    strokeWeight(1);
    bezier(bitmojiX-1,bitmojiY+4,bitmojiX+17,bitmojiY+15,bitmojiX-6,bitmojiY+17,bitmojiX-4,bitmojiY+14);  //nose   
    fill(255, 255, 255);
    arc(bitmojiX+1,bitmojiY+26,30,13,1,180); //mouth
    line(bitmojiX-15,bitmojiY+26,bitmojiX+17,bitmojiY+25);  //top of mouth
    noStroke();
    fill(90,56,37);
    ellipse(bitmojiX+1,bitmojiY+44,44,19); //bottom beard
    ellipse(bitmojiX,bitmojiY+21,33,10); //mustache
    //BEARD
    ellipse(bitmojiX-17,bitmojiY+37,21,13);
    ellipse (bitmojiX+18,bitmojiY+38,19,15);
    ellipse(bitmojiX-24,bitmojiY+31,12,15);
    ellipse(bitmojiX+22,bitmojiY+32,12,15);
    strokeWeight (11);
    stroke(90,56,37);
    line (bitmojiX-35,bitmojiY-33,bitmojiX-24,bitmojiY+28);
    line(bitmojiX+31,bitmojiY-18,bitmojiX+22,bitmojiY+37);
    //SHIRT
    noStroke();
    fill(211,211,211);
    quad(bitmojiX+49,bitmojiY+44,bitmojiX+41,bitmojiY+83,bitmojiX-56,bitmojiY+82,bitmojiX-48,bitmojiY+44);
    //TEXT ON SHIRT
    fill (0, 0, 0);
    textSize(20);
    text("BK",bitmojiX-17,bitmojiY+58,20,20);
};
var drawBunny=function(bunnySpeed) {
    //bunny
    fill(255, 255, 255);
    strokeWeight(1);
    stroke(3, 3, 3);
    ellipse(bunnyX+162, bunnyY+11, 29, 50);  // left ear
    ellipse(bunnyX+199, bunnyY+11, 29, 50);  // right ear
    ellipse(bunnyX+180, bunnyY+55, 60, 63);    // face
    ellipse(bunnyX+173, bunnyY+47, 6, 6);  // left eye
    ellipse(bunnyX+188, bunnyY+47, 6, 6);  // right eye
    line(bunnyX+159, bunnyY+72, bunnyX+202, bunnyY+72);   // mouth
    rect(bunnyX+172, bunnyY+72, 8, 7); // left tooth
    rect(bunnyX+180, bunnyY+72, 8, 7); // right tooth

    
};
    
var drawFrog=function(frogSpeed) {
     //frog
    noStroke();
    fill(30, 204, 91); // a nice froggy green!

    ellipse(frogX, frogY, 125, 67); // face
    ellipse(frogX - 50, frogY - 31, 30, 26); // left eye socket
    ellipse(frogX + 50, frogY - 31, 30, 26); // right eye socket
    fill(255, 255, 255); // for the whites of the eyes!
    ellipse(frogX - 50, frogY - 32, 19, 17); // left eyeball
    ellipse(frogX + 52, frogY - 32, 19, 17); // right eyeball
    fill(5, 0, 0);
    ellipse(frogX,frogY,67,20);
    rect(frogX-53, frogY-35, 6,6);
    rect(frogX+49, frogY-35,6,6);
    
    
};
  
    bitmojiX=bitmojiX+bitmojiSpeed;
    bunnyX=bunnyX+bunnySpeed;
    frogX=frogX+frogSpeed;
    drawBitmoji(random(1,5));
    drawBunny(random(1,5));
    drawFrog(random(1,5));
};

println(bitmojiSpeed);
println(bunnySpeed);
println(frogSpeed);












