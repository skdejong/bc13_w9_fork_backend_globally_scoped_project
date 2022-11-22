import express from 'express';
import * as tipsModel from '../models/gratitudes.js';

export const tipsRouter = express.Router();

gratitudesRouter.get('/rt', async function(req, res) {
    const randomTip = await gratitudesModel.getRandomTip();
    res.json({
        payload: randomTip,
    })
})