# BRIXEL Physical Computing Bluetooth — 0.2.0 개발판 (블루투스판)

[BRIXEL Physical Computing](https://github.com/brixel-editor/pxt-brixel-physical-computing)의 **블루투스판**입니다. 이 확장 **하나만** 넣으면 본 확장의 모든 블록(센서·디스플레이·모터·통신)이 **자동으로 함께** 들어오고, 여기에 micro:bit V2 내장 블루투스(BLE, 노르딕 UART) 연결·보내기·받기 블록이 더해집니다. **micro:bit V2** 전용입니다.

| 수업 | 넣을 확장 |
|---|---|
| 유선(USB) | 본 확장 `pxt-brixel-physical-computing` **하나** |
| 무선(블루투스) | 이 블루투스 확장 `pxt-brixel-physical-computing-ble` **하나**(본 확장 자동 포함) |

이 확장의 0.2.0 은 본 확장 **v0.4.0** 을 품습니다(0.1.0 = v0.3.0). 본 확장을 따로 또 넣을 필요는 없습니다(넣더라도 같은 버전이면 괜찮지만, 다른 버전이 섞이면 MakeCode 가 충돌을 알립니다).

## 왜 따로 나눴나요?

블루투스를 넣으면 블록을 쓰지 않아도 전원을 켜는 순간부터 블루투스가 계속 동작합니다. 블루투스 처리는 마이크로비트에서 가장 먼저 처리되는 일이라 DHT11 같은 시간에 민감한 센서 읽기에 끼어들어 가끔 실패를 일으키고, 메모리도 더 쓰고, `radio`와 함께 쓸 수 없습니다. 그래서 유선만 쓰는 수업에서는 블루투스를 아예 켜지 않도록 짝 확장으로 분리했습니다.

## MakeCode에 추가하기

**확장** 검색창에 다음 주소를 붙여 넣습니다. 본 확장은 자동으로 함께 들어옵니다.

```text
https://github.com/brixel-editor/pxt-brixel-physical-computing-ble
```

`radio`와 함께 쓸 수 없다는 안내가 나오면 **radio를 제거**합니다.

## 더해지는 블록 (카테고리: 블루투스 / 10. Bluetooth)

| 그룹 | 블록 |
|---|---|
| 설정 | `블루투스 시작` · `블루투스 연결되었는가?` · `블루투스 연결되면 실행` · `블루투스 해제되면 실행` |
| 보내기 | `BT (값) 보내기` — 끝에 줄바꿈 자동 |
| 받기 | `BT 메시지 받았을 때`(바뀐 때만) · `BT 매번 받을 때마다` · `BT 받은 값` · `BT 새 메시지 왔는가?` |
| 나누기 | `받은 BT 데이터를 (구분자)로 나누기` · `BT 나뉜 (n) 번째 값` |

브릭셀AI(WebBLE)에서 「BBC micro:bit [코드]」를 고르면 페어링 없이 바로 연결됩니다(`pxt.json` 의 BLE open 설정).

## 예전 작품(본 확장 v0.2.0 이하)

본 확장 v0.2.0 까지는 블루투스 블록이 본 확장 안(「10. Bluetooth」)에 있었습니다. 블록 이름(blockId)과 JavaScript 이름(`Bluetooth10.*`)을 **그대로** 옮겼으므로, 예전 작품은 **이 블루투스 확장을 추가하면**(본 확장은 지워도 됨 — 자동 포함) 블루투스 블록이 다시 붙습니다. 코드를 고칠 필요가 없습니다.

## 예제

```blocks
Bluetooth10.onBtConnected(function () {
    Bluetooth10.btSend("hello")
})
basic.forever(function () {
    if (Bluetooth10.btIsConnected()) {
        Bluetooth10.btSend("" + input.temperature())
    }
    basic.pause(1000)
})
```

## 라이선스

MIT
