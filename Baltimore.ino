int micVal= 0;
int gardeniaVal= 0; 
int divineVal= 0; 
int mugVal= 0; 




void setup() {
  Serial.begin(9600);
  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }
  
}

void loop() {

  if (Serial.available() > 0) {
    int inByte = Serial.read();
    
    micVal = analogRead(A0);
    gardeniaVal = analogRead(A1);
    divineVal = analogRead(A2);
    mugVal = analogRead(A3);
   
    Serial.print(micVal);
    Serial.print(',');
    Serial.print(gardeniaVal);
    Serial.print(',');
    Serial.print(divineVal);
    Serial.print(',');
    Serial.print(mugVal);
  }
}

