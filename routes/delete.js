var express = require('express');
var router = express.Router();
const query = require('../DB/entityModal');
/* DELETE home page. */
router.delete('/', function (req, res, next) {
  res.send({
    type: 'DELETE',
    result: query.DELETE(req.query.email),
  });
});

module.exports = router;
