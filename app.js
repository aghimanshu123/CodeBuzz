const express=require("express");
const bodyParser=require("body-parser");
require('dotenv/config');

const mongoose=require("mongoose");
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
const app=express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

const personSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
var Person=mongoose.model("Person",personSchema);
app.post('/login',function(req,res){
    var name = req.body.name;
	var pass = req.body.password;
    Person.findOne({name:name,pass:pass},function(err,details){
        if(err){
            return res.sendFile(__dirname +"/public/failure.html");
        }
        if(!details){
            return res.sendFile(__dirname +"/public/failure.html"); 
        }
        return res.sendFile(__dirname +"/public/index2.html");
    
    })
});

app.post('/sign_up', async function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;

    const person=new Person({
    name:name,
    email:email,
    password:pass,
});
const saveddata=await person.save();
res.sendFile(__dirname +"/public/index2.html");
});

app.post("/failure",function(req,res){
    res.redirect("/");
  })


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");

