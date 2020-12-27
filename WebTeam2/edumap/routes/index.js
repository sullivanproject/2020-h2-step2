const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Edu Map' });
});
//defaultmarker 이동
router.get('/defaultmarker', function(req, res, next){
  res.render('defaultmarker', {title: 'edu_defaultmarker'});
});
//infowindow 이동
router.get('/infowindow', function(req, res, next){
  res.render('infowindow', {title: 'edu_infowindow'});
});
//customover 이동
router.get('/customover', function(req, res, next){
  res.render('customover', {title: 'edu_customover'});
});
//mymap 이동
router.get('/mymap', function(req, res, next){
  res.render('mymap', {title: 'edu_mymap'});
});

module.exports = router;
