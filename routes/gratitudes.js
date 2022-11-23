import express from "express";
//import * as gratitudesModel from "../models/gratitudes.js";
import { addGratitude, getAllGratitudes, getRandomGratitude } from "../models/gratitudes.js";

export const gratitudesRouter = express.Router();

// gratitudesRouter.get("/rg", async function (req, res) {
//   const randomGratitude = await getRandomGratitude();
//   res.json({
//     payload: randomGratitude,
//   });
// });

gratitudesRouter.get("/gratitudes", async function (req, res) {
  const allGratitudes = await getAllGratitudes();
  console.log(allGratitudes);
  res.json({
    success: true,
    payload: allGratitudes,
  });
});

gratitudesRouter.post('/gratitudes', async function (req, res){
  const newGratitude = await addGratitude(req.body.gratitude);    
  res.json({ success: true, payload: newGratitude })

})
