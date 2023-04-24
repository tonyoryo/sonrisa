input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("ok")
})
radio.onReceivedString(function (receivedString) {
    if ("smile" == receivedString) {
        basic.showIcon(IconNames.Happy)
    } else if ("sad" == receivedString) {
        basic.showIcon(IconNames.Sad)
    } else if ("ok" == receivedString) {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("sad")
})
radio.setGroup(6)
