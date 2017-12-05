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

var micThresh= 100;
var gardeniaThresh= 100;
var divineThresh= 100;
var mugThresh= 100;

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
 console.log(inString);

  if (inString.length > 0 ) {
    
    if(inString != "hello"){
        if (inString.length > 2) {
          var sensors = split(inString, ',');
          mic = sensors[0];
          gardenia = sensors[1];
          divine = sensors[2];
          mug = sensors[3];
         

          if(mic > micThresh && cnn.time() === 0){

            cnn.play();
            mlk.stop();
            clash.stop();
            future.stop();

          } else if (mic <= micThresh && cnn.time() > 0) {

            cnn.pause(); 
          }

          if(gardenia > gardeniaThresh && mlk.isPlaying() === false){

            mlk.play();
            cnn.stop();
            clash.stop();
            future.stop();

          } else if (gardenia <= gardeniaThresh && mlk.isPlaying() === true) {

            mlk.pause(); 
              
          }

          if(divine > divineThresh && clash.time() === 0){

            clash.play();
            cnn.stop();
            mlk.stop();
            future.stop();

          } else if (divine <= divineThresh && clash.time() < 0) {

            clash.pause(); 
          }

          if(mug > mugThresh && mlk.isPlaying() === false){

            future.play();
            cnn.stop();
            mlk.stop();
            clash.stop();

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

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}
