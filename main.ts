basic.forever(function () {
    basic.showString("F")
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("B")
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("M")
        basic.pause(1000)
        basic.clearScreen()
    }
})
