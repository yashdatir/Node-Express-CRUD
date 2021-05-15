var express = require('express');
var router = express.Router();
const query = require('../DB/entityModal');

/* PUT home page. */
router.put('/', function (req, res, next) {
  res.send({
    type: 'UPDATE',
    result: query.UPDATE(req.body),
  });
});

module.exports = router;
