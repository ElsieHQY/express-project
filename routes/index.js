var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   console.log(req);
//   res.render('index', { title: 'Express' });
// });

router.get('/api/stu', function (req, res, next) {

  log
  db.query('SELECT * FROM students', function (err, rows) {
    if (err) {
      res
      console.log(err);
    }
    const data = rows;

    // use index.ejs
    res.json({ title: 'Student Information', data: data });
  });

});

module.exports = router;
