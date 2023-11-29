// DRV8833MotorDriver.cpp
#include "DRV8833MotorDriver.h"


DRV8833MotorDriver::DRV8833MotorDriver(int in1, int in2) {
  _in1 = in1;
  _in2 = in2;

  pinMode(_in1, OUTPUT);
  pinMode(_in2, OUTPUT);
}

void DRV8833MotorDriver::forward() {
  digitalWrite(_in1, HIGH);
  digitalWrite(_in2, LOW);
}

void DRV8833MotorDriver::backward() {
  digitalWrite(_in1, LOW);
  digitalWrite(_in2, HIGH);
}

// brake gradually
void DRV8833MotorDriver::brake() {
  digitalWrite(_in1, HIGH);
  digitalWrite(_in2, HIGH);
}

// force braking
void DRV8833MotorDriver::coast() {
  digitalWrite(_in1, LOW);
  digitalWrite(_in2, LOW);
}

// void DRV8833MotorDriver::setSpeed(int speed) {
//   analogWrite(_in1, speed);
//   analogWrite(_in2, speed);
// }
