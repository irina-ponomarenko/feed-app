import express from 'express';
import bodyParser from 'body-parser';


const App = express();

App.use(
    bodyParser.json()
);


App.listen(7000, () => {
    console.log('server is started');
});