var ball1 = {
    x: 275,
    y: 0,
    w: 50,
    h: 50,
    s: 5
};
var ball2 = {
    x: 425,
    y: 0,
    w: 50,
    h: 50,
    s: 10   
};
var ball3 = {
    x: 575,
    y: 0,
    w: 50,
    h: 50,
    s: 5
};
var ball4 = {
    x: 725,
    y: 0,
    w: 50,
    h: 50,
    s: 10   
};
var ball5 = {
    x: 875,
    y: 0,
    w: 50,
    h: 50,
    s: 5
};
var ball6 = {
    x: 1025,
    y: 0,
    w: 50,
    h: 50,
    s: 10   
};
var randR;
var randG; 
var randB;
function setup() {
    
    createCanvas(windowWidth,windowHeight);
    randR= random(0,255);
    randG= random(0,255);
    randB= random(0,255);
    
}

function draw() {
    background(randR, randG, randB);
    
    for (var i = 0; i < 900; i++){
        var q= random(-50,50);

        line(50, i,  50+q, i);
    }
    
    for (var i = 0; i < 900; i++){
        var q= random(-50,50);
    
        line(200, i,  200+q, i);
    }
    
    for (var i = 0; i < 900; i++){
        var q= random(-50,50);
    
        line(350, i,  350+q, i);
    }
    
    for (var i = 0; i < 900; i++){
        var q= random(-50,50);
    
        line(500, i,  500+q, i);
    }
    
    for (var i = 0; i < 900; i++){
        var q= random(-50,50);
        
        line(650, i,  650+q, i);
    }
    
     for (var i = 0; i < 900; i++){
        var q= random(-50,50);
        
        line(800, i,  800+q, i);
    }
    
     for (var i = 0; i < 900; i++){
        var q= random(-50,50);
        
        line(950, i,  950+q, i);
    }
    
     for (var i = 0; i < 900; i++){
        var q= random(-50,50);
        
        line(1100, i,  1100+q, i);
    }
    
     for (var i = 0; i < 900; i++){
        var q= random(-50,50);
        
        line(1250, i,  1250+q, i);
    }
    
    fill(255-randR, 255 - randG, 255 - randB);
    
    
    drawBalls();
    move(); 
    detectBounce();
    
    
}

function drawBalls(){
    ellipse(ball1.x, ball1.y, ball1.w, ball1.h);
    ellipse(ball2.x, ball2.y, ball2.w, ball2.h);
    ellipse(ball3.x, ball3.y, ball3.w, ball3.h);
    ellipse(ball4.x, ball4.y, ball4.w, ball4.h);
    ellipse(ball5.x, ball5.y, ball5.w, ball5.h);
    ellipse(ball6.x, ball6.y, ball6.w, ball6.h);
}

function move(){
    ball1.y = ball1.y + ball1.s;
    ball2.y = ball2.y + ball2.s;
    ball3.y = ball3.y + ball3.s;
    ball4.y = ball4.y + ball4.s;
    ball5.y = ball5.y + ball5.s;
    ball6.y = ball6.y + ball6.s;
}
    
function detectBounce(){
    if (ball1.y>= height || ball1.y < 0) {
        ball1.s = ball1.s *-1;    
    }
    if(ball2.y >= height || ball2.y < 0) {
        ball2.s= ball2.s * -1;
    }
    if (ball3.y>= height || ball3.y < 0) {
        ball3.s = ball3.s *-1;    
    }
    if(ball4.y >= height || ball4.y < 0) {
        ball4.s= ball4.s * -1;
    }
    if (ball5.y>= height || ball5.y < 0) {
        ball5.s = ball5.s *-1;    
    }
    if(ball6.y >= height || ball6.y < 0) {
        ball6.s= ball6.s * -1;
    }
}
