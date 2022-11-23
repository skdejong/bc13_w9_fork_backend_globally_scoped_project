import express from "express";
import morgan from "morgan";
import cors from "cors";

import { gratitudesRouter } from "./routes/gratitudes.js";
import { tipsRouter } from "./routes/tips.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());

app.use("/api/gratitudes", gratitudesRouter);
app.use("/api/tips", tipsRouter);

export default app;
