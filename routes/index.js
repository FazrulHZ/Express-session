var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function (req, res, next) {
  req.session.nama = "Ardin";
  res.json([{ nama: req.session.nama, session: req.session, status: "Ini POST" }]);
});

// router.get('/save', function (req, res, next) {
//   req.session.nama = req.query.nama;
//   res.json([{ nama: req.session.nama, session: req.session }]);
// });

router.get('/load', function (req, res, next) {
  res.json([{ nama: req.session.nama, session: req.session, status: "Ini GET" }]);
});

module.exports = router;
