const btn = document.querySelector('.btn');

let ripple;

btn.addEventListener('mouseenter', (e) => {
  const { left: rectLeft, top: rectTop } = e.target.getBoundingClientRect();
  const left = e.clientX - rectLeft;
  const top = e.clientY - rectTop;

  ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  btn.prepend(ripple);
});

btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple)
});
