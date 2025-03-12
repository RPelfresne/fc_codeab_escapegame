def on_button_pressed_a():
    global codeJoueur
    codeJoueur = "" + codeJoueur + "A"
    basic.show_string("A")
    verifcle()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global codeJoueur
    codeJoueur = "" + codeJoueur + "B"
    basic.show_string("B")
    verifcle()
input.on_button_pressed(Button.B, on_button_pressed_b)

def verifcle():
    if codeJoueur == codeAB:
        basic.clear_screen()
        basic.show_string(motSecret)
        control.reset()
    elif len(codeJoueur) > len(codeAB):
        basic.show_icon(IconNames.NO)
        basic.pause(2000)
        basic.clear_screen()
        control.reset()
codeJoueur = ""
codeAB = ""
motSecret = ""
motSecret = "karasu81271"
codeAB = "BABAAB"
codeJoueur = ""
basic.show_leds("""
    # # # # #
    # . . . #
    . . # # #
    . . . . .
    . . # . .
    """)