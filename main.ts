function vérifClé () {
    if (codeJoueur == codeAB) {
        basic.showString(motSecret)
        control.reset()
    } else if (codeJoueur.length > codeAB.length) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
        control.reset()
    }
}
input.onButtonPressed(Button.A, function () {
    codeJoueur = "" + codeJoueur + "A"
    basic.showString("A")
    vérifClé()
})
input.onButtonPressed(Button.B, function () {
    codeJoueur = "" + codeJoueur + "B"
    basic.showString("B")
    vérifClé()
})
let codeJoueur = ""
let codeAB = ""
let motSecret = ""
motSecret = "4628"
codeAB = "BABAAB"
codeJoueur = ""
basic.showLeds(`
    # # # # #
    # . . . #
    . . # # #
    . . . . .
    . . # . .
    `)
