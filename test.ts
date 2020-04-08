// tests go here; this will not be compiled when this package is used as a library
TCS34725.start(TCS34725_ATIME.TIME_2_4_MS, TCS34725_AGAIN.GAIN_4X)
basic.forever(function () {
    serial.writeValue("r", TCS34725.getSensorData(RGB.RED))
    serial.writeValue("g", TCS34725.getSensorData(RGB.GREEN))
    serial.writeValue("b", TCS34725.getSensorData(RGB.BLUE))
    serial.writeValue("c", TCS34725.getSensorData(RGB.CLEAR))
    basic.pause(250)
})
