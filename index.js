const express = require ('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const path = require('path');
const Portfolio = require('./routes/portfolioRoute');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/portfolio');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

//test de la page 
app.get('/', (req, res) => {
    res.redirect('/portfolio');
});



app.use('/', Portfolio);

app.use((req, res) => {
    res.status(404);
    res.send('Page non trouvée');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500);
    res.send('Erreur interne du serveur');
});

app.listen(3000, ()=> {
    console.log('Application est lancée sur le port 3000');
});