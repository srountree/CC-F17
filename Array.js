var cols = 5;
var rows = 5;
var myMatrix= [];
function setup(){
    
    createCanvas(500,500);
    rectMode(CENTER); 
    
    for (var x = 0; x < rows; x++) {
        myMatrix[x] = []; // create nested array
        for (var y = 0; y < cols; y++) {
            var r= random(1, 101);
            myMatrix[x][y] = r ;
        }
    }
    

    
}

function draw(){
    
    background(0);
    
    noStroke();
    
    for (var row = 0; row < rows; row ++){
        
        for (var col = 0; col < cols; col ++){
            
            if (myMatrix[row][col] <= 25){
                
                fill(255,0,150);
                
                ellipse((row + 1) * 85, (col + 1) * 85, 50, 50);
                
            } else if (myMatrix[row][col] > 25 && myMatrix[row][col] <= 50) {
                fill (0,255,0);
                
                rect((row + 1) * 85, (col + 1) * 85, 50, 50);
                
            } else if (myMatrix[row][col] > 50 && myMatrix[row][col] <= 75){
                
                fill (0,150,255);
                
                ellipse((row + 1) * 85, (col + 1) * 85, 50, 50);
                
            } else{
                fill (255,165,0);
                
                rect((row + 1) * 85, (col + 1) * 85, 50, 50);
                
            }
        }
        
    }
    
    if (mouseIsPressed){
     for (var x = 0; x < rows; x++) {
        myMatrix[x] = []; // create nested array
        for (var y = 0; y < cols; y++) {
            var r= random(1, 101)
            myMatrix[x][y] = r ;
        }
     }
    }
}
