import { model } from 'mongoose';
import { BirdSchema } from '../models/models';

const Bird = model('Bird', BirdSchema)

export const addBird = (req, res) => {
  let newBird = new Bird(req.body);

  newBird.save((err, bird) => {
    if (err) res.send(err);
    res.json(bird);
  })
}