const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const dburl =
  "mongodb+srv://admin:pranaya123@cluster0.swxw9.mongodb.net/MyDatabase?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());
app.set("view engine","ejs");
app.use(express.static("./public"));

var corsOptions = {
  origin: "http://127.0.0.1:8081",
  optionsSuccessStatus: 200,
};
app.use(express.static("./public"));
app.listen(8081);

app.get("/Signup",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/Signup.html'));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/login.html'));
});

app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});
 //  Retrieving the data from db
app.get("/show-feedbacks", async (req, res, next) => {
    const client = await mongoClient.connect(dburl);
    try {
      const db = await client.db("MyDatabase");
      const users = await db.collection("MP3").find().toArray();
      res.render("displayfeedback",{users:users});
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
    // res.send(``);
    // res.json({ message: "sample" });
  });
  // Storing the feedback into Db
  app.post("/user/feedback", cors(corsOptions), async (req, res) => {
    const client = await mongoClient.connect(dburl);
    try {
      const db = await client.db("MyDatabase");
      const user = await db.collection("MP3").insertOne(req.body);
      res.json({ message: "user created", user });
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
    console.log(req.body);
  });
  app.all("*", (req, res) => {
    res.sendStatus(404).send("Not Found");
  });
  

