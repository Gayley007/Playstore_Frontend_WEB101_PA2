import mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  tags: { type: [String], required: true },
}, { timestamps: true });

export default mongoose.model('App', appSchema);
