import express from 'express';
import morgan from 'morgan';

import {gratitudesRouter} from './routes/gratitudes.js';
import {tipsRouter} from './routes/tips.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', gratitudesRouter);
app.use('/api', tipsRouter);

export default app;