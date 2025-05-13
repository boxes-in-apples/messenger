const socket = io(); // Подключаем WebSocket

// Получаем элементы на странице
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.getElementById('messages');

// Слушаем событие отправки сообщения
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        // Шифруем сообщение перед отправкой (пока заглушка)
        const encryptedMessage = encryptMessage(message); // Здесь будет функция шифрования
        socket.emit('sendMessage', encryptedMessage);
        messageInput.value = ''; // Очищаем поле ввода
    }
});

// Обрабатываем входящее сообщение
socket.on('receiveMessage', (message) => {
    const decryptedMessage = decryptMessage(message); // Здесь будет функция дешифрования
    const messageElement = document.createElement('div');
    messageElement.textContent = decryptedMessage;
    messagesContainer.appendChild(messageElement);
});

// Функция для шифрования сообщений (заглушка)
function encryptMessage(message) {
    return message;
}

// Функция для дешифрования сообщений (заглушка)
function decryptMessage(message) {
    return message;
}
