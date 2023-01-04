var express = require('express');
const { checkTime } = require('../controllers/openOrClose');
var router = express.Router();

/* GET home page. */
router.get('/our-services', checkTime, function(req, res, next) {
  res.render('services', { title: 'Our Services' });
});

module.exports = router;
