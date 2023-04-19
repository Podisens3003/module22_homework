const btn = document.querySelector('.button');
const sizeScreen = document.querySelector('.screen-size');
const locationUser = document.querySelector('.location');

btn.addEventListener('click', () => {
    locationUser.textContent = '';
    sizeScreen.innerHTML = `Ширина экрана равна ${window.screen.width}px, а длина - ${window.screen.height}px`;
    if (navigator.geolocation) {
        locationUser.textContent = 'Определяем местоположение';
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        locationUser.textContent = 'Geolocation не поддерживается вашим браузером';
        console.log('провал');
    }
});

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationUser.textContent = `Широта: ${latitude}, высота: ${longitude}`;
}
const error = () => {
    locationUser.textContent = 'Информация о местоположении недоступна'
}