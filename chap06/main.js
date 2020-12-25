const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect); // width, height이 0인 경우 = getBoundingClientRect 할 때 target 이미지가 아직 준비되지 않았을 가능성 = load 이후에 해야함

  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horozontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${y -
      targetHalfHeight}px)`;
    tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
