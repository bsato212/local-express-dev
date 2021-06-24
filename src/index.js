// Includes the Express App
const app = require('./app');

// Reads HTTP port from environment variable.
// Defaults to port 8080 if variable is not found.
const port = process.env.PORT || 8080;

// Starts HTTP server.
app.listen(port, () => console.log(`Server listening on port [${port}]`));
