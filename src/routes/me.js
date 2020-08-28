const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/courses',meController.show);

module.exports = router;
