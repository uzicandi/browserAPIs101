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
