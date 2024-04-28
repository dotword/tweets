import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();

app.use(morgan('dev'));
app.use(fileUpload());
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

// Routes
app.use(routes);

app.use((re, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

app.use( (error, req, res, next ) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});


export default app;