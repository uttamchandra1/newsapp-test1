const express = require("express")
const router = express.Router();

const articleController = require("../controllers/article")


// create a new article 

router.post("/createarticles" , articleController.CreateArticle);
router.get("/articles" , articleController.getAllArticles);

module.exports = router;
