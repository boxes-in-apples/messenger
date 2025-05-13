const socket = new WebSocket('wss://messenger-inky-three.vercel.app/api/message'); // Укажи свой URL

// Получаем элементы на странице
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

// Слушаем событие отправки сообщения
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message); // Отправляем сообщение через WebSocket
        messageInput.value = ''; // Очищаем поле ввода
    }
});

// Обрабатываем входящие сообщения
socket.onmessage = (event) => {
    const message = event.data;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
};

// Обрабатываем ошибки соединения
socket.onerror = (error) => {
    console.error('Ошибка WebSocket:', error);
};
