import express from 'express';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';

const PORT_NUMBER = 4000;

const app = express();

// Mongoose garbo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/virus-downloader', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Bodyparser garbo
app.use(express.urlencoded({extended: true}));
app.use(express.json())

routes(app);

app.get('/', (req, res) => {
  res.send(`im behind ${PORT_NUMBER} proxies`);
})

app.listen(PORT_NUMBER, () => {
  console.log(`server running on ${PORT_NUMBER}`);
})