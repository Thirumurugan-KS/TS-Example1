import express, { Express } from 'express';
import dotenv from 'dotenv';

import homeRouter from './routes/homePage';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(homeRouter);

app.listen(PORT, () => console.log(`Running in ${PORT} ⚡`));