

void setup() {
  Serial.begin(9600);
  
}

void loop() {

  int reading = analogRead(A0);
  int val = map(reading, 0, 1023, 0, 255);
  Serial.write(val);
 
}

