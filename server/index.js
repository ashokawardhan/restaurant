import express from "express";
import Loadable from 'react-loadable';
import router from './router';

const PORT = 3000;

// initialize the application and create the routes
const app = express();

// tell the app to use the above rules
app.use(router);

// start the app
Loadable.preloadAll().then(() => {
    app.listen(PORT, error => {
        if (error) {
            return console.log("something bad happened", error);
        }

        console.log("listening on " + PORT + "...");
    });
});
