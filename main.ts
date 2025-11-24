basic.forever(function () {
    basic.showIcon(IconNames.House)
    basic.pause(500)
    basic.showIcon(IconNames.Tortoise)
    basic.pause(500)
    music.play(music.stringPlayable("B A G A G F A C5 ", 40), music.PlaybackMode.LoopingInBackground)
})
