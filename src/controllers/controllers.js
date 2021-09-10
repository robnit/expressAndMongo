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

export const getBirds = (req, res) => {
  Bird.find({}, (err, birds) => {
    if (err) res.send(err);
    res.json(birds);
  })
}

export const getBird = (req, res) => {
  Bird.findById(req.params.id, (err, bird) => {
    if (err) res.send(err);
    res.json(bird);
  })
}

export const updateBird = (req, res) => {
  Bird.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, bird) => {
      if (err) res.send(err);

      const updatedBird = {
        ...bird,
        ...req.body,
      }
      res.json(updatedBird);
  })
}

export const destroyBird = (req, res) => {
  Bird.findByIdAndRemove(req.params.id, (err, bird) => {
    if (err) res.send(err);
    res.json(bird);
  })
}