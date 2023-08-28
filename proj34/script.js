const countdown = document.querySelector('.countdown');

function getRandomIntInclusive(min = 0, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const today = new Date();
const month =
    today.getMonth() + getRandomIntInclusive(0, 11 - today.getMonth()),
  day = today.getDate() + getRandomIntInclusive(0, 100);

const interval = setInterval(() => {
  const current = new Date();
  const deadline = new Date(current.getFullYear(), month, day, 12, 0, 0);
  const diff = deadline - current,
    days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString(),
    hours = Math.floor((diff / (1000 * 60 * 60)) % 24).toString(),
    minutes = Math.floor((diff / (1000 * 60)) % 60).toString(),
    seconds = Math.floor((diff / 1000) % 60).toString();

  countdown.innerHTML = `
      <div data-content="Days">${days.length === 1 ? `0${days}` : days}</div>
      <div data-content="Hours">${
        hours.length === 1 ? `0${hours}` : hours
      }</div>
      <div data-content="Minutes">${
        minutes.length === 1 ? `0${minutes}` : minutes
      }</div>
      <div data-content="Seconds">${
        seconds.length === 1 ? `0${seconds}` : seconds
      }</div>
      `;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = `Here We Go!`;
  }

  document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(interval);

    const divs = document.querySelectorAll('.countdown div');
    divs.forEach((div) => {
      div.innerHTML = '00';
    });
  });
}, 1000);
