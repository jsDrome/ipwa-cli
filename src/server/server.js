import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import home from './routes/home';
import data from './routes/data';
import login from './routes/login';
import logout from './routes/logout';

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || BUILD_SERVER_PORT;
const app = express();

app.use(cookieParser());
app.use(morgan('tiny'));
app.use('/', home);
app.use('/data', data);
app.use('/login', login);
app.use('/logout', logout);
app.use(express.static('.'));

app.listen(PORT, () => console.log(`SERVER: Listening on port ${PORT}`));

export default app;
