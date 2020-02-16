import express from 'express';
import rc from 'rc';

const config = rc('config');
const port = process.env.PORT || config.build.server.port;
const app = express();

app.use(express.static('_dist'));

app.get('/server', (req, res) => {
  res.send('Server Side');
});

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));
