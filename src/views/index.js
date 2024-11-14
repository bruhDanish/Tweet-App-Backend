import express from 'express';
import morgan from 'morgan';
import { PORT } from '../config/server.config.js';
import apiRouter from '../routes/api.routes.js';

const app = express();
console.log(import.meta);
app.set('view engine', 'ejs');

app.set('views', import.meta.dirname + '/views');

app.use(morgan('combined'));

app.use (express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRouter); // Use the api router for all routes starting with /api

app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/ping', (req, res) => {
   return res.json({
        message: 'pong'
   });
});

app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'Not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});