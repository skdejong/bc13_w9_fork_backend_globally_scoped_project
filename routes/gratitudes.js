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


/* 
The app has several components, including:
 a React component for the main application, 
 a component for the input field where users can add gratitudes to their journal, 
 a component for displaying the list of gratitudes, and 
 a component for fetching and displaying a random joke. 
 The app also has a server-side component built with Express that handles requests to a database where the gratitudes are stored.

The app uses React hooks to manage state and handle data fetching and updating. 
For example, in the main Gratitude component, the useState hook is used to store and update the list of gratitudes in the database. 
The useEffect hook is used to fetch this data from the database and re-render the component whenever the data changes.

The app uses asynchronous JavaScript to handle requests to the server and the database. 
For example, the Gratitude component uses async/await syntax to fetch data from the server and handle POST and DELETE requests.

The app uses a router built with Express to handle requests to different endpoints on the server. 
For example, the gratitudesRouter handles GET, POST, and DELETE requests to the /api/gratitudes endpoint. 
This allows the server to handle multiple types of requests and route them to the appropriate functions for handling.
*/