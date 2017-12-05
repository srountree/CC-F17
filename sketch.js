var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here

var cnn;
var mlk;
var clash;
var future;

var mic;
var mug;
var divine;
var bulb;
var img;

var micThresh= 100;
var mugThresh= 100;
var divineThresh= 100;
var bulbThresh= 100;

var cnnPlay = false; 
var clashPlay = false;
var mlkPlay = false;
var futurePlay = false; 

//Preload 


function preload(){
    
    mlk = createVideo('MLK.webm');
    cnn= createVideo('Media.webm');
    clash= createVideo('TwoCities.webm');
    future= createVideo('Forward.webm');  
    img= createImage();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.open(portName); 
  cnn.hide();
  clash.hide();
  mlk.hide();
  future.hide();
  
}

function draw() {
    
  background(0);
  
  if (cnnPlay === true){

      
      image(cnn, 0,0);
      
            
  } else if (cnnPlay === false && cnn.time() > 0){
      

      image(img,0,0);
      
  }

  else if (cnnPlay === false && cnn.time() === 0){
      
      image(img,0,0); 
  }
    
  if (clashPlay === true){
    
      image(clash,0,0);

    
  } else if(clashPlay === false && clash.time() > 0){
      
      image(img,0,0);
      
      
  } else if(clashPlay === false && clash.time() === 0){
      
      image(img,0,0);
  }
 

  
}

function serialEvent() {
    
  var inString = serial.readStringUntil('\r\n');
  console.log(inString);

  if (inString.length > 0 ) {
      
    if(inString == "hello"){
        serial.write('x');
    }

    if(inString != "hello"){
        if (inString.length > 2) {
          var sensors = split(inString, ',');
          mic = sensors[0];
          mug = sensors[1];
          divine = sensors[2];
          bulb = sensors[3];
         

          if(mic > micThresh && cnn.time() === 0){

            cnnPlay= true;
            
            cnn.play();
            cnn.amp(.8);

          } else if (mic <= micThresh && cnn.time() > 0) {

            cnnPlay = false; 
            cnn.pause();
          } else if (mic > micThresh && cnnPlay === false && cnn.time() > 0){
              cnnPlay= true;
              
              cnn.play();
              
              cnn.amp(.8);
          }

          if(mug > mugThresh && mlk.time()===0){
            mlkPlay = true; 
            mlk.play();
            mlk.amp(.8);

          } else if (mug <= mugThresh && mlk.time() > 0) {
            mlkPlay= false;
            mlk.pause();
          } else if (mug > mugThresh && mlkPlay === false && mlk.time() > 0){
              
              mlkPlay = true;
              
              mlk.play();
              
              mlk.amp(.8);
              
          }

          if(divine > divineThresh && clash.time() === 0){

            clashPlay= true;
            
            clash.play();
              
            clash.amp(.8);
        

          } else if (divine <= divineThresh && clash.time() > 0) {

            clashPlay= false; 
            clash.pause();
              
          } else if (divine > divineThresh && clashPlay === false && clash.time() > 0){
              
              clashPlay= true;
              
              clash.play();
              clash.amp(.8);
          }

          if(bulb > bulbThresh && future.time() === 0){
              
            futurePlay = true;

            future.play();
            future.amp(.8);
        

          } else if (bulb <= bulbThresh && future.time() > 0) {
            
            futurePlay= false;

            future.pause();
              
          } else if (bulb > bulbThresh && futurePlay === false && future.time() > 0){
               futurePlay = true;
              
               future.play();
              
               future.amp(.8);
              
          }
            
          serial.write('x');
            
        }
        
        
    
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

function draw() {
    
  background(0);

  
}

function serialEvent() {
    
  var inString = serial.readStringUntil('\r\n');
 console.log(inString);

  if (inString.length > 0 ) {
    serial.write('x');
    
    if(inString != "hello"){
        if (inString.length > 2) {
          var sensors = split(inString, ',');
          mic = sensors[0];
          gardenia = sensors[1];
          divine = sensors[2];
          mug = sensors[3];
         

          if(mic > micThresh && cnn.time() === 0){

            cnn.play();
            cnn.amp(.8);
            

          } else if (mic <= micThresh && cnn.time() > 0) {

            cnn.pause(); 
          }

          if(gardenia > gardeniaThresh && mlk.isPlaying() === false){

            mlk.play();
            mlk.amp(.8);
            

          } else if (gardenia <= gardeniaThresh && mlk.isPlaying() === true) {

            mlk.pause(); 
              
          }

          if(divine > divineThresh && clash.time() === 0){

            clash.play();
            clash.amp(.8);
        

          } else if (divine <= divineThresh && clash.time() < 0) {

            clash.pause(); 
          }

          if(mug > mugThresh && mlk.isPlaying() === false){

            future.play();
            future.amp(.8);
            

          } else if (mug <= mugThresh && future.isPlaying() === true) {

            future.pause(); 
          }
       

        }
        
    
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
