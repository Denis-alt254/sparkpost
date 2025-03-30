const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, default: 'Untitled Design' },
  elements: [{
    type: { type: String, enum: ['text', 'image', 'shape'] },
    content: String,
    position: { x: Number, y: Number },
    size: { width: Number, height: Number },
    style: mongoose.Schema.Types.Mixed
  }],
  thumbnail: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Design', DesignSchema);