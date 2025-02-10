
// pulling in express to create the API server
const express = require('express');
const app = express();

app.use(express.json()); // middleware to parse JSON bodies

// creating a route that listens for GET requests to the root URL
app.post('/', (req, res) => {
    const acceptHeader = req.get('Accept');

    if (acceptHeader) {
        res.setHeader('Accept', acceptHeader)
    }

    const responseBody = {
        ...req.body
    }

    res.json(responseBody);
});

const port = process.env.PORT || 3000;
const server = app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;