export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Соединение установлено' });
    } else if (req.method === 'POST') {
        const message = req.body.message;
        // Можно добавить здесь обработку сообщений (например, шифрование)

        // Отправляем сообщение обратно клиенту
        res.status(200).json({ message });
    } else {
        res.status(405).json({ error: 'Метод не поддерживается' });
    }
}
