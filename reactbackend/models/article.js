const mongoose = require("mongoose")


const articleSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },

        author:{
            type:String,
            required:true
        },
        imageUrl:{
            type:String
        },
        content : {
            type:String,
            required:true
        },

        category:{
          type:String,
          required:true
        },
        
        
        tag:{
           type:String

        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }

    }
)

module.exports = mongoose.model("article" , articleSchema);