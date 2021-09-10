import { Schema } from 'mongoose';

export const BirdSchema = new Schema({
  birdName: {
    type: String,
    required: 'birdname required idiot'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});