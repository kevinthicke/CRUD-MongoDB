import bodyParser from 'body-parser';
import colors from 'colors/safe';
import express from 'express';
import mongoose from 'mongoose';

import { router as usersRouter } from './routes/users';
import { PORT } from './config/constants';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/coffeeDB', (err, response) => {
    if(err) {
        throw new Error(colors.red('Connection error with DB'));
    }

    console.log(colors.bold.green('~ DB connection established successfully'))
});

app.listen(PORT, () => {
    const msg = colors.bold.cyan(`Server running on localhost:${PORT}`);
    console.log(msg);
});
