### WebAPIs 
브라우저의 멀티쓰레딩을 이용해서 JS Runtime 환경에서 부족했던 좀 더 다양한 일들을 동시에 할 수 있다. 

## 어떻게 WebAPIs와 JS Engine이 서로 일을 하게 되는 걸까?  

콜백함수를 등록해서 'hello' 라는 콘솔을 출력한다고 가정해보자. 
```
function second() {
  setTimeout(console.log('hello'),1000);
}
second();
```
setTimeout을 호출하는 순간 콜스택에서 지워지고 WebAPIs는 타이머를 시작하게 된다.  
타이머가 실행되는 동안에도 타이머와 자바스크립트 엔진은 병렬적으로 실행이 되고 있다가  
지정된 시간이 끝나면 WebAPIs들은 __Task Queue__ 에 타이머 끝났다고 __timeout callback__ 을 집어넣는다.  

## Queue ?
- __FIFO(First In First Out)__ : `add`, `remove` 

## Task Queue에 쌓인 callback은 어떻게 실행될까 ?

Task Queue와 Call Stack을 관찰하는 __Event Loop(while, for loop)__ 가 있다.  
Loop가 계속 돌면서 콜스택과 태스크 큐를 관찰한다.  
```
Loop는 Call Stack이 비워질 때 까지 기다렸다가, Task Queue에 있는 것을 Call Stack으로 데리고 온다.  
➡️ timeout callback 실행
```

## Task Queue

WebAPIs에서 우리가 등록한 콜백 함수를 특정한 이벤트가 발생했을 때 Task Queue에 넣는다. 

## Microtask Queue

- __Promise then__  
- __mutation obeserver__  

## Render Sequence
