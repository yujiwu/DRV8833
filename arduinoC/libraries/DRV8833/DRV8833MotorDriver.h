// DRV8833MotorDriver.h
#ifndef DRV8833MotorDriver_h
#define DRV8833MotorDriver_h

#include <Arduino.h>

class DRV8833MotorDriver {
  public:
    DRV8833MotorDriver(int in1, int in2);

    void forward();
    void backward();
    void brake();
    void coast();
    // void setSpeed(int speed);

  private:
    int _in1;
    int _in2;
};

#endif
