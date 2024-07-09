const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        price:{
            type:Number,
            required:true
        },
        Offerprice:{
            type:Number
        },
        image:{
            type:String,
            required:true
        },
        category:{
            type: String,
            required:true  
    }
},
{ timestamps: true }
)
module.exports = mongoose.model("Product", productSchema);
