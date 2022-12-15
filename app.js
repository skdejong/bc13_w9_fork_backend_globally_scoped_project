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
 * The code you provided is a server file written in JavaScript that is using the Express.js web application framework. The server is set up to handle requests made to the server at specific URI (Uniform Resource Identifier) endpoints. The code is using middleware, in the form of Morgan and CORS, to process requests made to the server. The server is also importing a router file which is used to direct requests to the appropriate route handler.

The server listens for requests on the specified port, and logs a message to the console once it is running. The server is also set up to handle requests made to the /api/gratitudes URI endpoint using the imported router file. This means that when a request is made to this endpoint, it will be handled by the router file and directed to the appropriate route handler.
 * 
 * Note on CORS: 
 *  We need cross-domain communication enabled in our app so that single-page web apps can communicate with our back end.
 *  Use the cors middleware to enable cross-domain communication. 
 *  CORS stands are cross-origin resource sharing, which is the way to let browser apps communicate with apps in other domains.
 */