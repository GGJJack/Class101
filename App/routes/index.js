const express = require('express');
const controller = require('../controller/index.controller')

const router = express.Router();

router.get('/', controller.status);
router.get('/status', controller.status);

module.exports = router;
