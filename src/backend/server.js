const express = require('express'); //express import

const cors = require('cors');

const app = express(); //express app create

const PORT = 5000; //server port

//to read JSON data

app.use(express.json());
app.use(cors());

//test route
app.get('/', (req, res) => {
    res.send('backend is working');
} );

app.post('/api/appointments', (req, res) => {
    const {
        name, email, subject, message
    } = req.body;

    if(!name || !email || !subject || !message){
        return res.status(400).json({success: false, error: 'All fields are required!'});
    }
    console.log('Appointment received', req.body);

    res.status(200).json({
        success: true,
        message: 'Appointment received successfully',
    });
});

//server on

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

