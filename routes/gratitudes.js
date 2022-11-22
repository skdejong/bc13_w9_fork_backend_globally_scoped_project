import express from 'express';
import * as gratitudesModel from '../models/gratitudes.js';

export const gratitudesRouter = express.Router();

gratitudesRouter.get('/rg', async function(req, res) {
    const randomGratitude = await gratitudesModel.getRandomGratitude();
    res.json({
        payload: randomGratitude,
    })
})