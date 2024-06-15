// routes/boilerplateRoutes.js
const express = require('express');
const router = express.Router();
const boilerplateController = require('../controllers/boilerplateController');

router.get('/', boilerplateController.getBoilerplates);
router.post('/', boilerplateController.createBoilerplate);
router.get('/:id', boilerplateController.getBoilerplateById);
router.put('/:id', boilerplateController.updateBoilerplate);
router.delete('/:id', boilerplateController.deleteBoilerplate);
router.get('/hot', boilerplateController.getHotBoilerplates);

module.exports = router;
