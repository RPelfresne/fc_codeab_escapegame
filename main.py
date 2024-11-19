def on_button_pressed_a():
    global codeJoueur
    codeJoueur = "" + codeJoueur + "A"
    basic.show_string(codeJoueur)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global codeJoueur
    codeJoueur = "" + codeJoueur + "B"
    basic.show_string(codeJoueur)
input.on_button_pressed(Button.B, on_button_pressed_b)

codeJoueur = ""
motSecret = "4628"
codeAB = "BABAAB"
codeJoueur = ""

def on_forever():
    pass
basic.forever(on_forever)
