const halfCircles = document.querySelectorAll('.half-circle');
const halfCircleTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progressbar-circle');

document.addEventListener('scroll', () => {
  const pageViewPortHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const scrolledPortion = window.scrollY;

  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewPortHeight)) * 360;

  const scrolledPortionPercent = Math.floor(
    (scrolledPortionDegree / 360) * 100
  );

  progressBarCircle.textContent = `${scrolledPortionPercent} %`;

  halfCircles.forEach((el) => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`;

    if (scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = `rotate(180deg)`;
      halfCircleTop.style.opacity = '0';
    } else {
      halfCircleTop.style.opacity = '1';
    }
  });
});
