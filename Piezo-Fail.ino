int redLED = 11;
int blueLED = 12; 
int greenLED = 13;
int soundSensor = A1;
byte value= 0;
int barrier = 50;
int redLevel= HIGH;
int greenLevel = HIGH; 
int blueLevel = HIGH; 

void setup() {
  Serial.begin(9600);
  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  pinMode(blueLED, OUTPUT);

}

void loop() {
  value = analogRead(soundSensor);

  if (value >= barrier){
    redLevel == redLevel; 
    digitalWrite(redLED, redLevel);
    greenLevel!= greenLevel;
    digitalWrite(greenLED, greenLevel);
    blueLevel != blueLevel;
    digitalWrite(blueLED, blueLevel);

    Serial.println("Shhh!");
    
    }
  delay(150);

}
