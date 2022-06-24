const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
global.config = require("./modules/config");

// connection to DB
// connection to DB
mongoose.connect("mongodb://127.0.0.1:27017/komehgardi");
mongoose.Promise = global.Promise


const Schema = mongoose.Schema;
const UserSchema =  new Schema({
    name : {type:String ,require:true}
})

const userModel = mongoose.model("User",UserSchema);
new userModel({
    name:"mostafa"
}).save(err=>{
    if (err) throw err
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));

//const apiRouter = require("./modules/routes/api");
const webRouter = require("./modules/routes/web");


//app.use("/api",apiRouter);
app.use("/",webRouter);

app.listen(config.port,()=>{
    console.log(`server js running at port ${config.port}`);
})
