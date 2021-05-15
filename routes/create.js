var express = require('express');
var router = express.Router();
const query = require('../DB/entityModal');

/* POST home page. */
router.post('/', async (req, res, next) => {
  res.send({
    type: 'CREATE',
    result: await query.INSERT(req.body),
  });
});

module.exports = router;
