const int hot = 78;
void setup() {
pinMode(A2, INPUT); 
pinMode(11, OUTPUT); 
pinMode(12, OUTPUT); 
Serial.begin(9600);
}
void loop() {
int sensor = analogRead(A2);
float voltage = (sensor / 1024.0) * 5.0;
float cels = (voltage - .5) * 100;
float fahr = (cels * 1.8) + 32;
Serial.print("Temperature is: ");
Serial.print(fahr);

if (fahr >= hot) { 
digitalWrite(11, LOW);
digitalWrite(12, HIGH);
Serial.println("It's hot. Crank the AC.");
}

else { 
digitalWrite(11, HIGH);
digitalWrite(12, LOW);
Serial.println("It's Perfect. Go Outside!");
}
delay(15);
}
