function vérifClé () {
    if (codeJoueur == codeAB) {
        basic.showString(motSecret)
    } else if (codeJoueur.length > codeAB.length) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.clearScreen()
        codeJoueur = ""
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    codeJoueur = "" + codeJoueur + "A"
    basic.showString("A")
    serial.writeLine(codeJoueur)
    vérifClé()
})
input.onButtonPressed(Button.B, function () {
    codeJoueur = "" + codeJoueur + "B"
    basic.showString("B")
    serial.writeLine(codeJoueur)
    vérifClé()
})
let codeJoueur = ""
let codeAB = ""
let motSecret = ""
motSecret = "4628"
codeAB = "BABAAB"
codeJoueur = ""
