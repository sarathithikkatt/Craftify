const express = require('express');
const app = new express();


const port = process.env.PORT || 3333;

const cors = require('cors');
app.user(cors());

const fs = require("fs");

const upload = require("express-ileupload");
app.use(upload());

// var bodyparser = require ('body-parser');
// app.use(bodyparser.json())

app.use(function(req,res,next){
    res.header("Access-Control_Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Postdata = require("./src/model/postdata");
const Productdata = require("./src/model/productdata");
const Userdata = require("./src/model/userdata");



app.get("/feed",(req,res)=>{

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");


    Postdata.find()
    .then(function(posts){

        res.send(posts);


    });

});



app.get("/authors",(req,res)=>{

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");


    Authordata.find()
    .then(function(authors){

        res.send(authors);
        console.log(authors);
    
    });

});


//adding account
app.post("/add",(req,res)=>{

    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    // new account
    var usr = {
        username : req.body.name,
        useremail : req.body.email,
        userpass : req.body.password,
        isadmin : false,
        posts : []
    }


    //pass to userschema
    var user = Userdata(usr);


    user.save();
});



app.post("/addpost",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    
    var pst={
        postname : req.body.name,
        description : req.body.desc,
        image : req.body.image,
    }

    console.log(req.body);

    if(reqfiles){

        var file = req.file.image;
        var filename = req.files.image.name;
    }

    var post = Postdata(pst);


    post.save();

});


app.get("/posts/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    Bookdata.findOne({_id : id})
    .then(function(post){

        res.send(post);

    });

});

app.post("/updatepost/:id",(req,res)=>{

    const id = req.params.id;

    Postdata.updateOne({_id : id},
        {$set :
            {
                postname : req.body.name,
                description : req.body.desc,
                image : req.body.image,
            }
        })
        .then(function(post){
            //update a post
        });

    app.get("/delete/:id",(req,res)=>{

        const id = req.params.id;

        Postdata.deleteOne({_id : id})
        .then(function(post){
            //delete a post
        });

        
    });

});

app.listen(port);