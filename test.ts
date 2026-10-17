// Compile check: Bluetooth edition alone must expose the main extension's blocks.
Bluetooth10.onBtConnected(function () {
    Bluetooth10.btSend("connected")
})
Bluetooth10.onBtMessageChanged(function (message) {
    Bluetooth10.btParse(",")
    Displays01.lcdShowString(Bluetooth10.btParsedGet(1), 0, 0)
})
basic.forever(function () {
    Sensors03.dhtQuery(Sensors03.DHTType.DHT11, DigitalPin.P1, true, false, true)
    Bluetooth10.btSend("" + Sensors03.dhtRead(0) + "," + Sensors03.hcsr04Read(0) + "," + AdvSensors.sht30ReadHumidity())
    Actuators05.servoSetAngle(AnalogPin.P2, 90)
    basic.pause(2000)
})
