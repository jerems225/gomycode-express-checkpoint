var express = require('express');
const { checkTime } = require('../controllers/openOrClose');
var router = express.Router();

/* GET home page. */
router.get('/contact-us', checkTime, function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;