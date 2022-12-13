import express from "express";
import morgan from "morgan";
import cors from "cors";

/**
 * This imports our router file so that requests can be directed accordingly.
 */
import { gratitudesRouter } from "./routes/gratitudes.js";

const app = express();

/**
 * This is our middleware which every request goes through before being routed.
 * Morgan creates logs in the terminal which contain data for each request made to the server.
 * The CORS middleware ensures that there are no CORS errors when making HTTP requests.
 */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/**
 * This section is where we route requests based on their URI endpoint.
 */
app.use("/api/gratitudes", gratitudesRouter);

export default app;

/** 
 * Note on CORS: 
 *  We need cross-domain communication enabled in our app so that single-page web apps can communicate with our back end.
 *  Use the cors middleware to enable cross-domain communication. 
 *  CORS stands are cross-origin resource sharing, which is the way to let browser apps communicate with apps in other domains.
 */