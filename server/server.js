import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/user.routes.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(helmet());

const limiter = rateLimit({
    windowMs: 30 * 1000,
    message: "Requests are too frequent"
});
app.use(limiter);

const corsOptions = {
    origin: [
        'http://localhost:5173',
    ],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});