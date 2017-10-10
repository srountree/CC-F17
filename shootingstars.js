var c; 

var xpos= 0; 

var ypos= 0; 

var accel;

var xspeed =8;

var yspeed= 3;


function setup() {
    createCanvas(windowWidth, windowHeight);
    c= color(203, 140, 255); 
   
}

function draw() {
    
    background(c);
    noStroke();
    fill(140,245,255);
    
    
    
    push();
    
    translate(width*0.8, height*0.5);
    rotate(frameCount / -10.0);
    star( xpos, ypos, 30, 70, 5);
    
    pop();
    
    xpos++;
    
    ypos++;
    
    if( xpos>= width || xpos < 0){
        
        xspeed = -1 * xspeed;
        
        xpos= 0; 
    }
    
    if (ypos > height || ypos < 0){
        yspeed= -1 * yspeed;
        
        ypos= 0;
        
    }
    
    fill(255,171,140);
    
   push();
    
    translate(width*0.8, height*0.5);
    rotate(frameCount / -100.0);
    star(400, 600, 30, 70, 5);
    
    pop();
    
    fill(255,228,140);
    
    push();
    
    translate(width*0.8, height*0.5);
    rotate(frameCount / -100.0);
    star (100,100, 30, 70, 5);
    
    pop();
    
    fill(255,140,192);
    
    push();
    
    translate(width*0.8, height*0.5);
    rotate(frameCount / -100.0);
    star (1000,100, 30, 70, 5);
    
    pop();
    
    fill(140,255,150);
    
    push();
    
    translate(width*0.8, height*0.5);
    rotate(frameCount / -100.0);
    star (800,300, 30, 70, 5);
    
    pop();

}

function star(x, y, radius1, radius2, npoints) { //Star code from p5.js website 
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
