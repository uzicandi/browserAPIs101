const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = `${x}px`;
  horozontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
