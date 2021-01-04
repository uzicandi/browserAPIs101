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

만약, fetch를 이용해서 `Promise.then` 콜백함수를 등록해 놓고 프로미스가 잘 끝나서 resolve가 되면  
그 때 등록된 콜백이 microtask queue에 들어오게 된다. 

## Render Sequence

우리가 요소를 움직이거나 애니메이션을 할 때 주기적으로 브라우저 화면에 업데이트 해주는 순서.   
DOM요소가 브라우저에 표기되기 위해서는 __Render Tree, Layout, Paint, Composite__ 과정 필요.  
그 전에, WebAPIs 중 하나인 __Request Animation Frame__ 이 있음.  
이 API를 통해서 __콜백__ 을 등록해 놓으면 __다음에 브라우저가 업데이트 되기 전에 내 콜백을 실행해줘!__ 라는 뜻.  
이 때 우리가 호출하는 콜백은 __RAF Queue__ 에 차곡차곡 쌓임  

## 브라우저는 어떻게 이렇게 많은 것들을 처리할 수 있을까 ?

1. __Event Loop는 계속 돌다가 Call Stack에 들어있는 함수가 끝날 때 까지 기다리고 있는다.__  

그래서 Call Stack에서 시간 오래걸리는 걸 하면 다른 행동이 되지 않음  

🍒 Event Loop는 Render 쪽으로 갈수도, 안갈수도 있다. 
```
브라우저에서는 1초동안 60개의 프레임을 보여주도록 노력한다. `60 fps(16.7ms)`  
하지만 event loop는 그것보다 더 빠르게 움직이기 때문에 굳이 Render에 반응주지 않아도 되는 것. 
Render Tree는 60fps만 지켜서 업데이트 하면 된다.
```

2. __Event Loop는 Render를 거쳐 Microtask Queue에 온다__  

Microtask Queue는 큐 안에 들어있는 아이템이 없을 때 까지 기다렸다가  
하나씩 __Call Stack__ 으로 가지고 간다.  
- Promise.then이 끝나면, mutation observer 콜백을 __call stack__ 에 넣음  

✅  Point ! 
```
Event Loop이 Microtask Queue에 머무르는 동안 Microtask Queue에 또 다른 콜백이 들어온다면 
나중에 들어온 콜백도 전부 다 끝날 때 까지 계속 Call stack으로 가지고 와서 수행한다. 
```

3. __Event Loop는 Microtask Queue를 모두 비우고 Task Queue로 넘어온다__  
Task Queue에서는 딱 하나의 아이템만 Call stack으로 가져오게 된다.  

