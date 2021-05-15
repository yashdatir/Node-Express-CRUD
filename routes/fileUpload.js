var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = multer({ dest: 'uploads/' });
/*POST  home page. */
router.post('/', upload.single('file'), function (req, res, next) {
  console.log(req);
  res.send({
    type: 'FILE UPLOAD',
  });
});

module.exports = router;
