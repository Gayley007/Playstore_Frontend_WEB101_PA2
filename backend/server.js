const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// ✅ Add this GET route:
app.get('/api/google_play', (req, res) => {
    res.send('Google Play API is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
