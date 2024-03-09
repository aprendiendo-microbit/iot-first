basic.showNumber(9)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("AndroidAP4628", "esp8266wifi")
basic.showNumber(8)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
    basic.pause(1000)
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showNumber(5)
    basic.showNumber(4)
})
