import app from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});