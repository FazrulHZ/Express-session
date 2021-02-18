var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save', function (req, res, next) {
  req.session.nama = "Ardin";
  // res.json([{ nama: req.session.nama, session: req.session, status: "Ini POST" }]);
  req.session.token = "ini adalah nama token";
  res.json({
    success: true,
    message: 'sukses',
    mapData: {
      access_token: req.session.token,
      sessionID: req.sessionID
    }
  });
  console.log(req);
});

// router.get('/save', function (req, res, next) {
//   req.session.nama = req.query.nama;
//   res.json([{ nama: req.session.nama, session: req.session }]);
// });

router.get('/load', function (req, res, next) {
  // res.json([{ nama: req.session.nama, session: req.session, status: "Ini GET" }]);

  res.json({
    token: req.session.token,
    nama: req.session.nama,
    session: req.sessionID
  });
  console.log(req);
});

module.exports = router;
