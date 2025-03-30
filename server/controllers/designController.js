const Design = require('../models/Design');

exports.createDesign = async (req, res) => {
  try {
    const design = await Design.create({
      userId: req.userId,
      elements: req.body.elements || []
    });
    res.status(201).json(design);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create design' });
  }
};

exports.getUserDesigns = async (req, res) => {
  try {
    const designs = await Design.find({ userId: req.userId });
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch designs' });
  }
};

exports.updateDesign = async (req, res) => {
  try {
    const design = await Design.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: { elements: req.body.elements } },
      { new: true }
    );
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update design' });
  }
};