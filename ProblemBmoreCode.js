var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1421'; // fill in your serial port name here
var indata= 0;
var threshOne = 20; //vars to account for ambient light
var mlk;


//Preload 
//Separate function for playing video 

function preload(){
    mlk = loadSound('/Users/stephanierountree/Documents/Fall2017/CreativeComputing /P5/Baltimore/MLK.mp3');
    
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.open(portName);
  
}

function draw() {
  background(0);
    


  
}

function serialEvent() {
  indata = Number(serial.read());
    
  if(indata > threshOne && mlk.isPlaying() == false){
    
    mlk.play();
      
  } else if (indata <= threshOne && mlk.isPlaying() == true) {
      
    mlk.pause();
      
    
  } 

  
}


function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}
