basic.forever(function () {
    basic.showString("Fran")
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Borrego")
        basic.pause(1000)
        basic.clearScreen()
    }
})
