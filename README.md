### chap01

- window object에는 어떤 기능이 있는지
- `window.screen.width`, `window.outerWidth`, `documentElement.clientWidth` 등

### chap02

- scrolling 기능과 coordinates, x, y 좌표, client와 page의 차이점에 대해 이해함
- `scrollBy`, `scrollTo`, `scrollIntoView`, `getBoundingClientRect` 등

### chap03

- window load의 시작점 파악
- `DOMContentLoaded`, `load`, `beforeunload`, `unload` 등

### chap04

- 마우스 포인트에 따라 좌표가 따라다니는 프로그램
- `mousemove`, 및 원하는 모양 및 css, javascript로 만들기

### chap05

- 버튼으로 토끼 찾기
- `scrollIntoView` 의 `behavior`, `block` 속성 사용
- items 중앙 세로 정렬 css flex 다시 한번 익힘

### DOM

- 브라우저가 우리가 만든 웹 페이지나 어플리케이션을 어떻게 분석해서 정확한 위치에 표시하는지
- 우리가 어떻게 DOM 요소를 조작할 수 있는지에 대해
- 브라우저가 렌더링하는 순서
- 어떤 식으로 CSS를 써야 어떤 애니메이션이 브라우저 성능에 좋은지 나쁜지
- `will-change` : 레이어를 따로 만듦
- CSS Triggers : css만 사용할 때는 괜찮음,
  animation, transition을 사용할 때 어떤 CSS를 쓰냐에 따라서
  layout | paint | composite가 생길 수 있음
- `composite` : 이미 그려져 있는 레이어를 움직이거나, 변형만 하면 됨
- `paint` : 작은 레이어든 큰 레이어든 paint를 다시 준비해야 해서 시간이 걸리고, 메모리에 부담이 됨
- `layout` : 제일 최악, 처음 부터 Render Tree를 계산해서 어느 X와 Y, Width, Height을 쓸 건지 계산한 다음에 다시 paint 하고 composite까지 가야함

- `Blink`, `v8` : chrome 브라우저에서 쓰는 엔진
- `Gecko` : firefox
- `Webkit` : safari
- `EdgeHTML` : IEdge

-> 그래서 움직일 때, top, left 사용하면 X, translate 사용하는게 좋음

### chap06 웹의 성능개선

- chap04의 성능개선
- 성능개선 증거 : 개발자도구 - Performance : 모든 이벤트들
- 발생하는 중간중간 screenshot 해서 확인할 수 있음
- `record` -> 동작 시작 -> `stop` 해서 프로파일링 -> 빨간색 : 경고
- `command + shift + p` : 개발툴 팔레트 => `Show layout shift regions` => 레이아웃이 어떻게 발생하고 있는지 나옴 (레이아웃이 발생하지 않아야 좋은 것)
- 사용자의 인터랙션이 발생하는 경우에 더 신경써야 함

### chap 07

```
FontAwesome

https://fontawesome.com/

https://www.youtube.com/watch?v=X91jsJyZofw&feature=youtu.be&t=340

CSS Gradient

https://cssgradient.io/

Box Shadow CSS Generator

https://www.cssmatic.com/box-shadow


```

### chap 08 Event 개념

- keyboard
- resizing window
- close window
- page loading
- form submission
- video is being played
- error

```
Events 개념

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

Events 종류

https://developer.mozilla.org/en-US/docs/Web/Events
```

- 인공적으로 클릭이벤트 전송

```
$0.dispatchEvent(new Event('click'));
```

- 이벤트 리스너 지우기

```
$0.removeEventListener('click', listener);
```

##### Capturing & Bubbling

- `event-capture.html`

##### 브라우저의 기본기능을 취소

- `event-prevent.html` : `preventDefault`

- 스크롤 이벤트가 발생하면 페이지가 위/아래로 움직이는
- 체크 박스를 클릭하면 체크박스가 선택/비선택 되는
- 버튼을 누르면 눌러지는 효과가 나오는
- 링크를 클릭하면 링크가 열리는
  등의 이벤트가 발생했을 때, 위와 같은 기능을 원하지 않을 때 사용.

- 대부분의 이벤트가 능동(active)이고 scroll은 대표적인 수동(passive)

##### 이벤트 위임

- `event-delegation.html`
- 반복될 때는 각 node에 이벤트 위임 보다 `부모 node` 에 이벤트 위임하자
