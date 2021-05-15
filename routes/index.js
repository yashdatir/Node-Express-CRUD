var express = require('express');
var router = express.Router();
const query = require('../DB/entityModal');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.send({
    type: 'VIEW',
    result: await query.SELECT(),
  });
});

module.exports = router;
