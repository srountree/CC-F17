int micVal= 0;
int mugVal= 0; 
int divineVal= 0; 
int bulbVal= 0; 




void setup() {
  Serial.begin(9600);
  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }
  
}

void loop() {
  
  if (Serial.available() > 0) {
    micVal = analogRead(A0);
    mugVal = analogRead(A1);
    divineVal = analogRead(A2);
    bulbVal = analogRead(A3);
   
    Serial.print(micVal);
    Serial.print(',');
    Serial.print(mugVal);
    Serial.print(',');
    Serial.print(divineVal);
    Serial.print(',');
    Serial.println(bulbVal);
  }
}
