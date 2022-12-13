import express from "express";
import {
  addGratitude,
  deleteGratitude,
  getAllGratitudes,
} from "../models/gratitudes.js";

export const gratitudesRouter = express.Router();

/**
 * GET URI/api/gratitudes - returns object with success boolean and payload
 * with array of all gratitudes using getAllGratitudes model.
 */
gratitudesRouter.get("/", async function (req, res) {
  const allGratitudes = await getAllGratitudes();
  res.json({
    success: true,
    payload: allGratitudes,
  });
});

/**
 * POST URI/api/gratitudes with body - returns object with success boolean and payload
 * with gratitude object that was added to the database using the addGratitude model.
 */
gratitudesRouter.post("/", async function (req, res) {
  const newGratitude = await addGratitude(req.body.gratitude);
  res.json({ 
    success: true, 
    payload: newGratitude 
  });
});

/**
 * DELETE URI/api/gratitudes/ID - returns object with success boolean
 * and payload containing deleted object using deleteGratitude.
 */
gratitudesRouter.delete("/:id", async function (req, res) {
  const deletedGratitude = await deleteGratitude(req.params.id);
  res.json({ 
    success: true, 
    payload: deletedGratitude 
  });
});
