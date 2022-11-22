import express from 'express';
import * as tipsModel from '../models/tips.js';

export const tipsRouter = express.Router();

tipsRouter.get('/rt', async function(req, res) {
    const randomTip = await tipsModel.getRandomTip();
    res.json({
        payload: randomTip,
    })
})