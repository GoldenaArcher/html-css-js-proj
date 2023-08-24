let current = 0,
  playPauseBool = true,
  interval;

const changeSlides = () => {
  const slideList = document.querySelectorAll('.slide');
  const slides = Array.from(slideList);
  if (current == slides.length) current = 0;
  else if (current < 0) current = slides.length - 1;

  slides.forEach((slide, i) => {
    if (i === current) {
      slide.style.cssText = 'visibility: visible; opacity: 1';
    } else {
      slide.style.cssText = 'visibility: hidden; opacity: 0';
    }
  });
};

const playPause = () => {
  if (playPauseBool) {
    interval = setInterval(() => {
      current++;
      changeSlides();
    }, 3000);
    playPauseBool = false;
  } else {
    clearInterval(interval);
    playPauseBool = true;
  }

  changePlayPause();
  arrowsVisitiblity();
};

const changePlayPause = () => {
  const icon = document.querySelector('.play-pause i');
  const cls = icon.classList[1];
  if (cls === 'fa-play') {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    icon.classList.add('fa-play');
    icon.classList.remove('fa-pause');
  }
};

const arrowsVisitiblity = () => {
  const arrows = document.querySelectorAll('.control');
  const arrowsList = Array.from(arrows);
  arrowsList.forEach((arrow) => {
    if (!playPauseBool) arrow.classList.add('arrows-visibility');
    else arrow.classList.remove('arrows-visibility');
  });
};

document.querySelector('.play-pause').addEventListener('click', () => {
  playPause();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    playPause();
  }

  current--;
  changeSlides();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    playPause();
  }

  current++;
  changeSlides();
});

changeSlides();
playPause();
