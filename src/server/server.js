import express from 'express';
import rc from 'rc';

const config = rc('config');
const port = process.env.PORT || config.build.server.port;
const app = express();

app.get('/server', (req, res) => {
  res.send('Hello, from Server!');
});

app.get('/index.js', (req, res) => {
  // eslint-disable-next-line no-magic-numbers
  res.redirect(301, "404.html");
});

app.use(express.static('.'));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));

export default app;
