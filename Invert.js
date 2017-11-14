var video; 

function setup(){
    createCanvas(windowWidth, windowHeight);
    video= createVideo("Arrays.mp4");
    video.size(600,600);  
    video.hide();
    video.loop();
}

function draw(){
    background(255);
    image(video, 0, 0, 2400, 800);
    if(mouseIsPressed){
        filter('INVERT');
    }
    

}
