import pg from "pg";

/**
 * The database URL is stored in our local .env file, which should not be pushed to GitHub.
 * Instead we use this variable to store it.
 */
const databaseURL = process.env.DATABASE_URL;

/**
 * Pool manages connections to the database (think librarian with hoses!)
 */
const pool = new pg.Pool({
  connectionString: databaseURL,
});

export default pool;

/* 
The code you provided is for a React application that has a Gratitude section where users can create a gratitude list and add items to it. The Gratitude component has two child components, GratitudeInput and GratitudeList, which handle the input of new items and display of the list, respectively.

The Gratitude component uses two "useState" hooks to manage the state of the gratitude list in the database and the state of the response to POST and DELETE methods. The Gratitude component also has a function, "getGratitudes", that fetches the data from the database and updates the gratitude list state. The Gratitude component also has two functions, "handleCreate" and "handleDelete", that handle the creation and deletion of items on the gratitude list.

The GratitudeList component maps through the gratitude list state, creating a new array and adding a new item for each item in the state. It then grabs the ID and text content of each item and uses the ID as a unique key for each list item. The text content is displayed as the list item text.

The GratitudeInput component captures the user input and uses a function received as a prop from its parent component, Gratitude, to add the input to the gratitude list.
*/