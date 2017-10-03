function setup() {
    createCanvas(700,600);
}

function draw() {
    var black= color(0,0,0);
    var white= color(255,255,255);
    background(235,160,255);
    noStroke();
    fill(165,255,255);
    triangle(300, 360, 350, 270, 400, 360);
    fill(160, 185, 255);
    triangle(320,350,348,300,380,350);
    fill(160,255,234);
    star(233, 175, 40, 80, 5);
    star(467, 175, 40, 80, 5);
    fill(255,234,160);
    star(233, 175, 30, 70, 5);
    star(467, 175, 30, 70, 5);
    fill(235, 160, 255);
    star(233, 175, 20, 60, 5);
    star(467, 175, 20, 60, 5);
    fill(black);
    star(233, 175, 10, 50, 5);
    star(467, 175, 10, 50, 5);
    fill(181,255, 170);
    arc(350, 550, 280, 280, PI, TWO_PI);
    fill(255, 160, 181);
    arc(350, 550, 187, 187, PI, TWO_PI);
    fill(black);
    triangle(280, 550, 300, 550, 290, 520);
    triangle(340, 550, 360, 550, 350, 520);
    triangle(400, 550, 420, 550, 410, 520);

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