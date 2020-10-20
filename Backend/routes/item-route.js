const express = require('express');

const itemControllers = require('../controllers/item-controllers');
const router = express.Router();

router.get('/', itemControllers.getItems );
router.post('/item', itemControllers.createItem);
router.post('/payment', itemControllers.checkPayment)


module.exports = router;

