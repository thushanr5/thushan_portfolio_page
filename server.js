const express = require('express');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// const bootstrap = require('bootstrap')

// Middleware to parse JSON
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/photos', (req, res) => {
    res.render('photos')
});

app.get('/work', (req, res) => {
  res.render('work');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});