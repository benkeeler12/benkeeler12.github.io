var x=random(40,360);
var y=random(40,360);

var drawHead= function() {
  
    noStroke();
    fill (255, 205, 148);  //skin tone
    ellipse (x,y,84,100);   //head
    fill(250, 250, 250);
    arc (x-43,y+37,29,55,0,360);  //left indent
    arc (x+41,y+37,29,55,0,360); //right indent 
};
var drawHair= function(){
    
    fill(90, 56, 37); //hair tone
    quad (x-49,y,x-40,y-32,x-7,y-46,x-27,y-4); //left hair
    quad(x+48,y,x+36,y-33,x+9,y-48,x+28,y-4); //right hair
    ellipse(x-2,y-34,74,32);  //top hair
    fill (115,23,23);
    ellipse (x-15,y,8,6); //left eye
    ellipse (x+12,y,8,6);  //right eye
    stroke(0,0,0);  
};

var drawNose= function() {
    
    fill(255,205,148);
    bezier(x-1,y+4,x+17,y+15,x-6,y+17,x-4,y+14);  //nose   
    fill(255,255,255);
    arc(x+1,y+26,30,13,1,180); //mouth
    line(x-15,y+26,x+17,y+25);  //top of mouth
    noStroke();
};

var drawBeard=function() {
     
    fill(90,56,37);
    ellipse(x+1,y+44,44,19); //bottom beard
    ellipse(x,y+21,33,10); //mustache
    //BEARD
    ellipse(x-17,y+37,21,13);
    ellipse (x+18,y+38,19,15);
    ellipse(x-24,y+31,12,15);
    ellipse(x+22,y+32,12,15);

    strokeWeight (11);
    stroke(90,56,37);
    line (x-35,y-33,x-24,y+28);
    line(x+31,y-18,x+22,y+37);
};

var drawShirt=function() {
  
    //SHIRT
    noStroke();
    fill(211,211,211);
    quad(x+49,y+44,x+41,y+83,x-56,y+82,x-48,y+44);
    //TEXT ON SHIRT
    fill (0, 0, 0);
    textSize(20);
    text("BK",x-17,y+58,20,20);
};

drawHead();
drawHair();
drawNose();
drawBeard();
drawShirt();











