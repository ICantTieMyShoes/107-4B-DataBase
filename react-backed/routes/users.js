var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id :'1',username:"404411737 鄭秉程"},
    {id :'2',username:"404412180 嚴永順"}
    
  ]);
});
module.exports = router;
