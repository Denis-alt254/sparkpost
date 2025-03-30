const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { createDesign, getUserDesigns, updateDesign } = require('../controllers/designController');

router.use(auth);

router.post('/', createDesign);
router.get('/', getUserDesigns);
router.put('/:id', updateDesign);

module.exports = router;