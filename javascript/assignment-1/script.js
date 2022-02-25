const myName = document.getElementById('myName');
const clock = document.getElementById('myClock');

const userName = prompt('Adınız Nedir: ');
myName.textContent = userName;

const pad = (time) => (time < 10 ? `0${time}` : time);

const showTime = (date = new Date()) => {
  const days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ];
  const time = `${pad(date.getHours())}:
    ${pad(date.getMinutes())}:
    ${pad(date.getSeconds())} ${days[date.getDay()]}`;

  clock.textContent = time;

  setInterval(showTime, 1000);
};

showTime();
