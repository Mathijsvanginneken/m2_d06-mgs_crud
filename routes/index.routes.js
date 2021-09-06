<<<<<<< HEAD
const express = require('express');
const router = express.Router();

/* GET home page */

// Code the  get('/') route here rendering index
router.get('/', (req, res) => {
  res.render('index', {title: "Home Page TEST"})
});

module.exports = router;
=======
const express = require('express');
const router = express.Router();

/* GET home page */

// Code the  get('/') route here rendering index
router.all('/', (req, res) => {
  res.render('index', {title: "Home Page TEST"})
});

module.exports = router;
>>>>>>> 6f957638fa4c9225e677e32ab06448e8feb19d20
