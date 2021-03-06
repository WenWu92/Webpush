const express = require('express');
const user = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/list', user.list);
router.get('/detail/:id', user.detail);
router.post('/create', user.create);
router.post('/login', user.login);

module.exports = router;
