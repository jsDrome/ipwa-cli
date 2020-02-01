import express from 'express';
import rc from 'rc';

const config = rc('jsdrome');
const port = process.env.PORT || config.server.port;
const app = express();

app.use(express.static('_dist'));

app.get('/hi', (req, res) => {
  res.send('hii');
});

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));