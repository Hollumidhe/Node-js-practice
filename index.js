// defining express 
const express = require('express');
const app = express();

// the is for route.
app.get('/', (req, res) => {
  res.send("Hello Folks");
})


// route params
app.get('/api/payment/:id', (req, res) => {
  res.send(req.params.id);
});

// Using environment variable (PORT)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The port is listing to posrt ${port}...`));


/*
// listening
app.listen(5000, () => console.log('listening to port 5000...'));
*/