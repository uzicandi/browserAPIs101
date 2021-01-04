Java = Multi Threaded Language  
JavaScript = Single Threaded Language  
자바스크립트 자체에는 멀티쓰레딩을 할 수 있는 방법은 없지만
자바스크립트가 동작하고 있는 브라우저 위에는 여러가지 쓰레드가 들어있다.  
그래서 우리가 브라우저, 즉 **Web APIs** 들을 이용하게 되면 멀티쓰레딩이 가능하다.

그리고, JavaScript Runtime Environment에서는 멀티쓰레딩 같은 효과를 얻을 수 있다.  
즉, 자바스크립트가 실행되는 실행 환경 위에서는 멀티쓰레딩 뿐만 아니라 **Event Loop** 를 이용해서  
조금 더 다양한 동작을 실행할 수 있다.

우리의 웹어플리케이션이 브라우저 위에 올라가는 순간 **JavaScript Engine** 이  
우리가 작성한 소스 코드를 한 줄 한 줄씩 해석하고 분석하고 실행하게 된다.

# JavaScript Engine

JavaScript Engine은 `Memory Heap`과 `Call Stack`등이 있다.  
프로세스 안에 힙과 스택이 있듯 자바스크립트 엔진에도 메모리힙과 콜스택 등이 있다.  


✅ **Memory Heap**

- 우리가 데이터를 만들 때, 즉 **변수를 선언해서 오브젝트, 문자열, 숫자를 할당** 하게 되면 그 데이터를을 전부 다 **메모리 힙에 저장** 이 된다.
- 구조적으로 정리된 자료구조가 아니라 자료들이 여기저기 아무렇게나 저장이 되어있다.

✅ **Call Stack**

- 우리가 함수를 실행하는 순서에 따라 차곡차곡 쌓아 놓음
- **LIFO(Last In First Out)**, 보통 스택에는 `push`, `pop`, `peek`같은 API들이 있다.
- 함수들이 호출하는 순서를 기억했다가, 함수가 끝나면 원래 있던 자리로 돌아가기 위해 쓰이는 자료구조 중 하나.
- 각 프로세스와 쓰레드에는 저마다의 콜스택이 들어가 있다. __일을 수행할 때 어디서 왔고, 어디로 다시 가야하는지 정보를 기억해야 되기 때문__ 

```
function second() {
    console.log('hello');
    return;
}
function first() {
    second();
    return;
}
function main() {
    first();
    return;
}
main();
```
- __Maximum call stack size exceeded__ : 프로세스, 쓰레드마다 지정된 콜스택 사이가 있다. 
- 아래처럼 함수안에서 자기 자신을 계속 부르는 것을 __재귀함수__ 라고 함 : 유용하지만 콜스택사이즈 신경써야 함
```
function endless() {
    endless();
}
endless();
```


