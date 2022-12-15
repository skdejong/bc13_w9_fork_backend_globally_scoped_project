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


/* 
The code you have shared is a server file for a web app. 
It imports the main app file and then use the app.listen method to start the server, listening on the port specified in the process.env.PORT variable. 
The console.log statement is used to print a message to the console indicating that the server is running and on which port it is listening.
*/