import express from "express";
import morgan from "morgan";
// import cors from "cors";

import { gratitudesRouter } from "./routes/gratitudes.js";
import { tipsRouter } from "./routes/tips.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// app.use(cors());

// app.get("/", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// app.listen(80, function () {
//   console.log("CORS-enabled web server listening on port 80");
// });

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", gratitudesRouter);
app.use("/api", tipsRouter);

export default app;
