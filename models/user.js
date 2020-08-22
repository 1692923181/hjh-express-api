const mongoose = require("../config/db");

const schema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:{
        type:String,
        default:"http://localhost:3000/hello.jpg"
    }
});

const model = mongoose.model("user",schema)

module.exports = model