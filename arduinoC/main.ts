// define the enumerator for dropdown menu on the block

enum motors {
    M1, M2, M3, M4, M5, M6
}

enum pins {
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
}

enum actions {
    Forward, Backward, Brake
}

//% color="#292826" iconWidth=40 iconHeight=40
namespace drv8833 {
    //% block="initialize the motor [LIST] with pin1 [PIN1] and pin2 [PIN2]" blockType="command"
    //% LIST.shadow="dropdown" LIST.options="motors" LIST.defl="motors.M1"
    //% PIN1.shadow="dropdown" PIN1.options="pins" PIN1.defl="pins.2"
    //% PIN2.shadow="dropdown" PIN2.options="pins" PIN2.defl="pins.3"
    export function motorInit(parameter: any, block: any){
        let list = parameter.LIST.code; 
        let pin1 = parameter.PIN1.code;
        let pin2 = parameter.PIN2.code;
        Generator.addInclude('drv8833', '#include "DRV8833MotorDriver.h"', true);
        Generator.addObject(`${list}`, 'DRV8833MotorDriver', `${list}(${pin1}, ${pin2});`, true);
    }

    //% block="motor [LIST] [ACTION]" blockType="command"
    //% LIST.shadow="dropdown" LIST.options="motors" LIST.defl="motors.M1"
    //% ACTION.shadow="dropdown" ACTION.options="actions" ACTION.defl="actions.Forward"
    export function motorAction(parameter: any, block: any){
        let action = parameter.ACTION.code;
        let list = parameter.LIST.code;
        switch (action){
            case 'Forward': 
                Generator.addCode(`${list}.forward();`);
                break;
            case 'Backward':
                Generator.addCode(`${list}.backward();`);
                break;
            case 'Stop':
                Generator.addCode(`${list}.brake();`);
                break;
        }
    }
}
