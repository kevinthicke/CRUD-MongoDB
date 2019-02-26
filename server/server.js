import express from 'express';
import colors from 'colors/safe';
import bodyParser from 'body-parser';

import { router as usersRouter } from './routes/users';
import { PORT } from './config/constants';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
    const msg = colors.bold.cyan(`Server running on localhost:${PORT}`);
    console.log(msg);
});
