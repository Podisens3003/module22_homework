const btn = document.querySelector('.button');
const timezone = document.querySelector('.timezone');
const dateTimeTxt = document.querySelector('.date_time_txt');

btn.addEventListener('click', () => {
    timezone.textContent = '';
    dateTimeTxt.textContent = '';

    if (!navigator.geolocation) {
        console.log('Браузер не поддерживает');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});

const error = () => {
    timezone.textContent = 'Вы не дали доступ к данным';
}

const success = (position) => {
    const { latitude, longitude } = position.coords;
    const zone = fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`, { method: 'GET' });
    zone.then(response => response.json())
        .then(response => {
            dateTimeTxt.textContent = `${response.date_time_txt}`;
            timezone.textContent = `${response.timezone}`;
        })
        .catch( () => console.log("ошибка при получении timezone"))
}