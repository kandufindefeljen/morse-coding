input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(morseList.length)
})
input.onButtonPressed(Button.A, function () {
    morseList.unshift(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playTone(880, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= morseList.length - 1; index++) {
        basic.clearScreen()
        basic.pause(200)
        if (morseList[index] == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (morseList[index] == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    morseList.unshift(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    music.playTone(659, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    morseList = []
})
let morseList: number[] = []
morseList = []
let loop = 0
