input.onButtonPressed(Button.A, function () {
    codeJoueur = "" + codeJoueur + "A"
    basic.showString("A")
    verifcle()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    codeJoueur = "" + codeJoueur + "B"
    basic.showString("B")
    verifcle()
    basic.clearScreen()
})
function verifcle () {
    if (codeJoueur == codeAB) {
        basic.clearScreen()
        basic.showString(motSecret)
        control.reset()
    } else if (codeJoueur.length > codeAB.length) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
        control.reset()
    }
}
let codeJoueur = ""
let codeAB = ""
let motSecret = ""
motSecret = "KARASU81271"
codeAB = "BABAAB"
codeJoueur = ""
basic.showLeds(`
    # # # # #
    # . . . #
    . . # # #
    . . . . .
    . . # . .
    `)
