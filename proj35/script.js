const date = new Date();
date.setDate(1);

const renderCalendar = () => {
  const monthDays = document.querySelector('.days');

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = date.getDay();

  const prevLastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()];

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let i = firstDayIndex; i > 0; i--)
    [(days += `<div class="prev-month">${prevLastDayIndex - i + 1}</div>`)];

  for (let i = 1; i <= lastDay; i++) {
    let todayClass = '';
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth())
      todayClass = 'today';
    days += `<div class="curr-month ${todayClass}">${i}</div>`;
  }

  for (let i = 1; i <= nextDays; i++) {
    days += `<div class="next-month">${i}</div>`;
  }

  monthDays.innerHTML = days;
};

document.querySelector('.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
