var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here
var indata;
var colorVal = 255;
var gVal= 165;
var textVal= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
 
}

function draw() {
    
    background(255);
    noStroke();
    fill(textVal);
    textSize(100);
    text("Rainbow.", 450, 400);
    fill(colorVal, 0, 0);
    ellipse(150, 600, 55, 55);
    fill(colorVal, gVal, 0);
    ellipse(350, 600, 55, 55);
    fill(colorVal,colorVal,0);
    ellipse(550, 600, 55, 55);
    fill(0,colorVal,0);
    ellipse(750, 600, 55, 55);
    fill(0, 0, colorVal);
    ellipse(950, 600, 55, 55);
    fill(colorVal, 0, colorVal);
    ellipse(1150, 600, 55, 55);
 
}


function serialEvent() {
    indata = Number(serial.read());
    textVal= 0 + indata;
    colorVal = 255 - indata;
    gVal= 165 - indata;
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
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