import app from "./app.js";

/**
 * The port we are using is stored in the .env file which does not get pushed to GitHub.
 * We store it in this variable instead.
 */
const PORT = process.env.PORT;

/**
 * This is where we tell the server to listen on the specified port for requests.
 */
app.listen(PORT, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
