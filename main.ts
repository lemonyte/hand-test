input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 1, 90, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 140, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 4, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 5, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 6, 0, 500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 1, 180, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 0, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 130, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 4, 130, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 5, 130, 500)
    basic.pause(500)
    startbit.setPWMServo(startbit.startbit_servorange.range1, 6, 130, 500)
    basic.clearScreen()
})
startbit.startbit_Init()
startbit.startbit_init_colorSensor(startbit.startbit_colorSensorPort.port4)
basic.forever(function () {
    if (startbit.startbit_checkCurrentColor(startbit.startbit_Colors.Red)) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 140, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 0, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 4, 0, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 5, 0, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 6, 0, 500)
    } else if (startbit.startbit_checkCurrentColor(startbit.startbit_Colors.Blue)) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 2, 0, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 3, 130, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 4, 130, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 5, 130, 500)
        startbit.setPWMServo(startbit.startbit_servorange.range1, 6, 130, 500)
    }
})
