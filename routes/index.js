var express = require('express');
const { checkTime } = require('../controllers/openOrClose');
var router = express.Router();

/* GET home page. */
router.get('/', checkTime ,function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
