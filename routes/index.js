var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/tools",function(req,res,next){
  res.render("tools")
})

router.get("/support",function(req,res,next){
  res.render("support")
})

router.get("/pricing",function(req,res,next){
  res.render("pricing")
})

module.exports = router;
