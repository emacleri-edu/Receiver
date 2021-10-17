radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 277) {
        music.playMelody("C E G C5 C5 G E C ", 120)
    }
})
led.plot(2, 0)
radio.setGroup(1)
basic.forever(function () {
	
})
