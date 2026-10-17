// Compile-only smoke test for the Bluetooth companion.
Bluetooth10.onBtConnected(function () {
    Bluetooth10.btSend("connected")
})
Bluetooth10.onBtMessageChanged(function (message) {
    Bluetooth10.btParse(",")
    basic.showString(Bluetooth10.btParsedGet(1))
})
input.onButtonPressed(Button.A, function () {
    if (Bluetooth10.btIsConnected()) Bluetooth10.btSend("" + input.temperature())
    if (Bluetooth10.btHasNew()) basic.showString(Bluetooth10.btGetReceived())
})
