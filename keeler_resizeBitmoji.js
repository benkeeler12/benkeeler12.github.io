 var drawBitmoji=function(bitmojiX,bitmojiY,bitHeight) {
    noStroke();
    fill (255, 205, 148);  //skin tone
    ellipse (bitmojiX-(bitHeight/150*0),bitmojiY-(bitHeight/150*0),bitHeight/150*84,bitHeight/150*100);   //head
    fill(255, 255, 255);
    arc (bitmojiX-(bitHeight/150*43),bitmojiY+(bitHeight/150*37),bitHeight/150*29,bitHeight/150*55,bitHeight/150*0,bitHeight/150*360);  //left indent
    arc (bitmojiX+(bitHeight/150*41),bitmojiY+(bitHeight/150*37),bitHeight/150*29,bitHeight/150*55,bitHeight/150*0,bitHeight/150*360); //right indent
    fill(90, 56, 37); //hair tone
    quad (bitmojiX-(bitHeight/150*49),bitmojiY-(bitHeight/150*0),bitmojiX-(bitHeight/150*40),bitmojiY-(bitHeight/150*32),bitmojiX-(bitHeight/150*7),bitmojiY-(bitHeight/150*46),bitmojiX-(bitHeight/150*27),bitmojiY-(bitHeight/150*4)); //left hair
    quad(bitmojiX+(bitHeight/150*48),bitmojiY-(bitHeight/150*0),bitmojiX+(bitHeight/150*36),bitmojiY-(bitHeight/150*33),bitmojiX+(bitHeight/150*9),bitmojiY-(bitHeight/150*48),bitmojiX+(bitHeight/150*28),bitmojiY-(bitHeight/150*4)); //right hair
    ellipse(bitmojiX-(bitHeight/150*2),bitmojiY-(bitHeight/150*34),bitHeight/150*74,bitHeight/150*32); //top hair
    fill (115,23,23);
    ellipse (bitmojiX-(bitHeight/150*15),bitmojiY-(bitHeight/150*0),bitHeight/150*8,bitHeight/150*6);   //left eye
    ellipse (bitmojiX+(bitHeight/150*12),bitmojiY-(bitHeight/150*0),bitHeight/150*8,bitHeight/150*6);  //right eye
    stroke(10, 10, 10);
    strokeWeight(1);
    fill(255,205,148);
    bezier(bitmojiX-(bitHeight/150*1),bitmojiY+(bitHeight/150*4),bitmojiX+(bitHeight/150*17),bitmojiY+(bitHeight/150*15),bitmojiX-(bitHeight/150*6),bitmojiY+(bitHeight/150*17),bitmojiX-(bitHeight/150*4),bitmojiY+(bitHeight/150*14));  //nose   
    fill(255,255,255);
    arc(bitmojiX+(bitHeight/150*1),bitmojiY+(bitHeight/150*26),bitHeight/150*30,bitHeight/150*13,bitHeight/150*1,bitHeight/150*180); //mouth
    line(bitmojiX-(bitHeight/150*15),bitmojiY+(bitHeight/150*26),bitmojiX+(bitHeight/150*17),bitmojiY+(bitHeight/150*25));  //top of mouth
    noStroke();
    fill(90,56,37);
    
    ellipse(bitmojiX+(bitHeight/150*1),bitmojiY+(bitHeight/150*41),bitHeight/150*44,bitHeight/150*19); //bottom beard
    ellipse(bitmojiX-(bitHeight/150*0),bitmojiY+(bitHeight/150*21),bitHeight/150*33,bitHeight/150*10); //mustache
    //BEARD
    ellipse(bitmojiX-(bitHeight/150*17),bitmojiY+(bitHeight/150*37),bitHeight/150*21,bitHeight/150*13);
    ellipse (bitmojiX+(bitHeight/150*18),bitmojiY+(bitHeight/150*38),bitHeight/150*19,bitHeight/150*15);
    ellipse(bitmojiX-(bitHeight/150*24),bitmojiY+(bitHeight/150*31),bitHeight/150*12,bitHeight/150*15);
    ellipse(bitmojiX+(bitHeight/150*22),bitmojiY+(bitHeight/150*32),bitHeight/150*12,bitHeight/150*15);
    
    strokeWeight (11);
    stroke(90,56,37);
    line (bitmojiX-(bitHeight/150*35),bitmojiY-(bitHeight/150*33),bitmojiX-(bitHeight/150*24),bitmojiY+(bitHeight/150*28));
    line(bitmojiX+(bitHeight/150*31),bitmojiY-(bitHeight/150*18),bitmojiX+(bitHeight/150*22),bitmojiY+(bitHeight/150*38));
    
    //SHIRT
    noStroke();
    fill(211,211,211);
    quad(bitmojiX+(bitHeight/150*49),bitmojiY+(bitHeight/150*44),bitmojiX+(bitHeight/150*41),bitmojiY+(bitHeight/150*83),bitmojiX-(bitHeight/150*56),bitmojiY+(bitHeight/150*82),bitmojiX-(bitHeight/150*48),bitmojiY+(bitHeight/150*44));
    
    //TEXT ON SHIRT
    fill (0, 0, 0);
    textSize(bitHeight/150*20);
    text("BK",bitmojiX-(bitHeight/150*17),bitmojiY+(bitHeight/150*70));
    noFill();
};
drawBitmoji(100,100,199);
drawBitmoji(100,300,147);
drawBitmoji(300,300,140);
drawBitmoji(304,90,120);

mousePressed=function() {
    drawBitmoji(mouseX,mouseY,113);
    
    
};
