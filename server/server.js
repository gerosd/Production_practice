import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Указываем абсолютный путь к статическим файлам
app.use(express.static(path.join(__dirname, '../client', 'dist')));

// API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// Главная страница - отправляем index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});