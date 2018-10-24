import express from "express";
import Loadable from 'react-loadable';
import bodyParser from "body-parser";
import router from './router';
import autocomplete from './data/autocomplete';
import { generateListOfRestaurants, findRestaurants } from './data/restaurants';

generateListOfRestaurants(1000);

const PORT = 3000;

// initialize the application and create the routes
const app = express();

// tell the app to use the above rules
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/autocomplete', (req, res) => {
    res.send(autocomplete(req.body.text));
});

app.post('/restaurants', (req, res, next) => {
    res.send(findRestaurants(req.body.list, req.body.pageNo));
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
