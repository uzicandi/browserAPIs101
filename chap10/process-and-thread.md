# 프로세스와 쓰레드의 차이점

### 프로세스 ❓

운영체제(OS) 위에서 독립적으로 메모리에서 실행되고 있는 프로그램

```
ex) 음악재생 프로그램
```

프로세스 마다 할당된 메모리나 데이터들이 지정되어져 있다.

- 프로세스에는 프로그램을 실행하기 위해서 작성된 `CODE`
- 함수들이 어떤 순서로 실행되어야 하는지, 이 함수가 끝나면 어디로 다시 돌아가야 되는지에 대한 정보를 저장하고 있는 `STACK`
- 오브젝트를 생성하거나 데이터를 만들 때 그 데이터들이 저장되는 공간 `HEAP`,
  동적으로 할당된 데이터들이 저장.
- 전역변수나 Static 변수가 할당되는 `DATA`

### 쓰레드 ❓

한 프로세스 안에서 여러 개가 동작할 수 있다.
각각 저마다 해야 되는 업무를 배정 받는다.

자기들만의 수행해야 하는 함수의 호출을 기억해야 하기 때문에
쓰레드마다 `STACK`이 할당되어져 있다.

결국 한 프로그램을 실행시켜야 하므로
프로세스에 있는 `CODE`, `HEAP`, `DATA` 를 이용한다.

```
ex) 음악재생 프로그램 : 음악재생 쓰레드, 사진편집 쓰레드, 음악데이터 받아와서 처리 쓰레드 등등으로 구성
```

동시다발적으로 발생되어 프로세스가 더 효율적으로 일을 할 수 있도록 도움을 줌
-> 음악을 들으면서 사진편집하기

### POINT ✅

쓰레드는 자신들이 일을 수행할 때 어디에서 부터 어디까지 일을 했고,
그 다음엔 어디로 가야 하는지 이런 일의 흐름을 기억할 수 있는 고유의 스택이 지정되어져 있지만,

데이터, 코드, 힙 같은 공통적인 데이터 리소스는 프로세스에 있기 때문에
쓰레드들은 이 프로세스에 공통적으로 할당된 리소스에
동시다발적으로 접속하고 업데이트 해야 돼서 서로 공유하면서 사용함

#### 멀티쓰레딩이 어려운 이유

멀티쓰레딩을 잘못하면 공통적으로 업데이트 하면서
순서가 맞지 않거나 하면 발생할 수 있는 문제가 있음

```
프로세스 : 프로그램을 동작하는 최고의 단위
쓰레드 : 프로그램 안에서 동시에 여러 개가 수행될 수 있는 작은 일꾼 단위
멀티쓰레딩: 한 프로세스 안에서 여러가지 쓰레드가 동시다발적으로 일어나는 것 -> 효율적인 프로그래밍
```
