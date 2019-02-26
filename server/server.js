import bodyParser from 'body-parser';
import colors from 'colors/safe';
import express from 'express';
import logSymbols from 'log-symbols';
import mongoose from 'mongoose';

import { router as usersRouter } from './routes/users';
import { PORT, MONGO_DB_URL } from './config/constants';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

mongoose.connect(MONGO_DB_URL, (err, response) => {

    if(err) {
        throw new Error(colors.red('Connection error with DB'));
    }

    const msg = colors.bold.green(' DB connection established successfully');
    console.log(logSymbols.success, msg);

});

app.listen(PORT, () => {
    const msg = colors.bold.cyan(` Server running on localhost:${PORT}`);
    console.log(logSymbols.success, msg);
});
