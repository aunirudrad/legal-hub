const express = require('express'); //express import

const app = express(); //express app create

const PORT = 5000; //server port

//to read JSON data

app.use(express.json());

//test route
app.get('/', (req, res) => {
    res.send('backend is working');
} );

//server on

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

