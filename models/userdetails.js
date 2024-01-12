const mongoose=require("mongoose");
var Schema = mongoose.Schema;
// Create a schema for the user model
var UserSchema = new Schema({  
    username: { type: String, 
        required: true 
    }, 
    // The username of the user (unique
    password: {type:String,
        required:true
    },
    email:{type:String,
        lowercase:true
    }
    },{timestamps:true});
    const detail=mongoose.model("detail",UserSchema);
    module.exports=detail;