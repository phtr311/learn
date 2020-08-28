const express = require('express');
const router = express.Router();

const testController = require('../app/controller/TestController');

router.get('/',testController.test);

module.exports = router;
