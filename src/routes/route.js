const express = require('express');
const externalModule = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
//    externalModule.welcome()
//    externalModule.printDate()
//    externalModule.printMonth()
//   externalModule.getBatchInfo()
    //   externalModule.trim()
    //   externalModule.toLowerCase()
    //   externalModule.toUpperCase()

    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason