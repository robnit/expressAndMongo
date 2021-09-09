import express from 'express';

const PORT_NUMBER = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send(`im behind ${PORT_NUMBER} proxies`);
})

app.listen(PORT_NUMBER, () => {
  console.log(`server running on ${PORT_NUMBER}`);
})