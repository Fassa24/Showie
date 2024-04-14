import express from 'express';
import morgan from 'morgan'; 
import helmet from 'helmet'; 
import indexRoutes from './routes/index.js';

const app = express();

app.use(helmet()); 
app.use(express.json()); 
app.use(morgan('dev')); 

app.use(indexRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
