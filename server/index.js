import request from 'request';
import express from "express";
import Loadable from 'react-loadable';
import bodyParser from "body-parser";
import router from './router';
import autocomplete from './data/autocomplete';
import { generateListOfRestaurants, findRestaurants } from './data/restaurants';

generateListOfRestaurants(1000);

const PORT = 3000;

const app = express();

app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // set default parser as json

// autocomplete text api
app.post('/autocomplete', (req, res) => {
    res.send(autocomplete(req.body.text));
});

// restaurants search api
app.post('/restaurants', (req, res, next) => {
    res.send(findRestaurants(req.body.list, req.body.pageNo));
});

app.get('/images', (req, res) => { // proxy as direct url loaded the same image everywhere
    var newurl = 'https://loremflickr.com/110/110/food/';
    req
        .pipe(request(newurl))
        .on('error', (err) => { res.status(500).json({message: 'image not found'})}) // error in loading image
        .pipe(res);
});

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, error => {
        if (error) {
            return console.log("something bad happened", error);
        }

        console.log("listening on " + PORT + "...");
    });
});
