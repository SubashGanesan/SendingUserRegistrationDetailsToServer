const express= require ("express");
const bodyParser= require("body-parser");
const cors= require("cors");
// const mongodb= require("mongodb");
// const MongoClient= mongodb.MongoClient;
// const url= "mongodb://localhost:27017";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})


app.listen(3000,(error)=>{
    if(error) throw error;
    console.log("server is running on port 3000")
});