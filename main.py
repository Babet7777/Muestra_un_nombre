def on_forever():
    basic.show_string("Fran")
    basic.pause(1000)
basic.forever(on_forever)

def on_forever2():
    if input.button_is_pressed(Button.A):
        basic.show_string("Borrego")
        basic.pause(1000)
        basic.clear_screen()
basic.forever(on_forever2)
