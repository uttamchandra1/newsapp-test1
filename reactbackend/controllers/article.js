const Article = require('../models/article')


// Creating a new article 

exports.CreateArticle = async (req , res) => {
    try {
        const {title , author , content , imageUrl ,category, tag } = req.body;

        const newArticle = new Article({
            title,
            author,
            imageUrl,
            content,
            category,
            tag
        });

        const savedArticle = await newArticle.save();
        res.status(201).json({
            message:"Article Created "
        });
    } catch (error) {
        
        res.status(400).json({
            error:"Something gone wrong ",
            details:error.message
        });
        
    }
};

exports.getAllArticles = async (req , res) =>{
    try {
        const articles = await Article.find();
        res.status(200).json(articles)
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

