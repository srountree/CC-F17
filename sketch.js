var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here

var cnn;
var mlk;
var clash;
var future;

var mic;
var gardenia;
var divine;
var mug;

var micThresh= 20;
var gardeniaThresh= 20;
var divineThresh= 20;
var mugThresh= 20;

//Preload 


function preload(){
    
    mlk = loadSound('MLK.wav');
    cnn= createVideo('Media.webm');
    clash= createVideo('TwoCities.webm');
    future= loadSound('Forward.wav');   
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.open(portName);
  cnn.hide();
  clash.hide();
  
}

function draw() {
    
  background(0);

  
}

function serialEvent() {
    
  var inString = serial.readStringUntil('\r\n');
    
  if (inString.length > 0 ) {
      
    serial.write('x');
    
    if(inString != "hello"){
        if (inString.length > 2) {
          var sensors = split(inString, ',');
          mic = sensors[0];
          gardenia = sensors[1];
          divine = sensors[2];
          mug = sensors[3];
          

          if(mic > micThresh && cnn.isPlaying() === false){

            cnn.play();

          } else if (mic <= micThresh && cnn.isPlaying() === true) {

            cnn.pause(); 
          }

          if(gardenia > gardeniaThresh && mlk.isPlaying() === false){

            mlk.play();

          } else if (gardenia <= gardeniaThresh && mlk.isPlaying() === true) {

            mlk.pause(); 
          }

          if(divine > divineThresh && clash.isPlaying() === false){

            clash.play();

          } else if (divine <= divineThresh && clash.isPlaying() === true) {

            clash.pause(); 
          }

          if(mug > mugThresh && mlk.isPlaying() === false){

            future.play();

          } else if (mug <= mugThresh && future.isPlaying() === true) {

            future.pause(); 
          }
       

        }
        
        serial.write('x');
    }
    
    
    
  }
    
}
  

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}
