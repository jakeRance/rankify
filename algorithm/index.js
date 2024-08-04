const express = require('express');
const bodyParser = require('body-parser');  // Optional: for parsing JSON or URL-encoded data

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());  // Optional: parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});