const express = require('express');
const router = express.Router();
const ElyController = require('../controller/ElyController');

router.get('/', ElyController.getItems);
router.get('/:id', ElyController.getItem);
router.post('/', ElyController.createItem);
router.put('/:id', ElyController.updateItem);
router.delete('/:id', ElyController.deleteItem);

module.exports = router;
