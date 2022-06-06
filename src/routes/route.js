const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook  )
router.get("/booklist", BookController.booklist )
router.post("/getBooksinYear",BookController.getBooksinYear)
router.post("/getParticularBooks",BookController.getParticularBooks)
router.get("/getINRBooks",BookController.getINRBooks)
router.get("/getRandomBooks",BookController.getRandomBooks)
module.exports = router;