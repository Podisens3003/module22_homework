const text = document.querySelector('.text');
const message = document.querySelector('.message');
const locationUser = document.querySelector('.location');
const messageField = document.querySelector('.message-field');
const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');

const addMessage = (massageText) => {
    const divElem = document.createElement("div");
    divElem.innerText = massageText;
    messageField.appendChild(divElem);
    return divElem
}

websocket.addEventListener('message', ({ data }) => {
    const divElem = addMessage(data);
    divElem.style.alignSelf = 'flex-start';
});

message.addEventListener('click', () => {
    const massageText = text.value;
    if (!massageText) return;
    text.value = "";
    addMessage(massageText);
    websocket.send(massageText);
});

locationUser.addEventListener('click', (e) => {
    if (!navigator.geolocation) {
        alert('Ваш браузер не поддерживает geolocation')
    } else {
        navigator.geolocation.getCurrentPosition(success, error)
    }
});

const success = (position) => {
    const { latitude, longitude } = position.coords;
    const getCoords = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    const aElem = document.createElement('a');
    aElem.href = getCoords;
    aElem.innerText = 'я тут';
    messageField.appendChild(aElem);
}

const error = () => alert('Вы не дали доступ к вашей геопозиции')