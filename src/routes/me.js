const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/courses',meController.show);
router.get('/trash/courses',meController.trashCourses);

module.exports = router;
