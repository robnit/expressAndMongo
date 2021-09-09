import express from 'express';
import routes from './src/routes/routes.js';

const PORT_NUMBER = 4000;

const app = express();

routes(app);

app.get('/', (req, res) => {
  res.send(`im behind ${PORT_NUMBER} proxies`);
})

app.listen(PORT_NUMBER, () => {
  console.log(`server running on ${PORT_NUMBER}`);
})