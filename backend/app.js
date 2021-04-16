const express = require('express');
const app = new express();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:3000/craftify');

const port = process.env.PORT || 4000;

const cors = require('cors');
app.use(cors());

var bodyparser = require("body-parser");
app.use(bodyparser.json());

email="admin@gmail.com"
password="123456"

//login
app.post('/login',(req,res)=>{
    let userData = req.body

    if(!username){
        res.status(401).send("Invalid username")
    }else
    if (password !== userData.password){
        res.status(401).send('Inalid Password')
    }else {
        res.send(200).send()
    }
});
const fs = require("fs");


app.use(function(req,res,next){
    res.header("Access-Control_Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Postdata = require("./src/model/Postdata");
const Productdata = require("./src/model/product");
const Userdata = require("./src/model/userdata");


//feed
app.get("/feed/all",(req,res)=>{

    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    Postdata.find()
    .then(function(posts){
        res.send(posts);
    });


});


//adding account
app.post("/addaccount",(req,res)=>{

    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    // new account
    var usr = {
        fullname : req.body.fullname,
        userphone : req.body.userphone,
        email : req.body.email,
        password : req.body.password,
        // isadmin : false,
        // posts : []
    }


    //pass to userschema
    var user = Userdata(usr);
    user.save();
    res.send("success");
});



// app.post("/addpost",(req,res)=>{

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    
//     var pst={
//         postname : req.body.name,
//         description : req.body.desc,
//         image : req.body.image,
//     }

//     console.log(req.body);

//     if(reqfiles){

//         var file = req.file.image;
//         var filename = req.files.image.name;
//     }

//     var post = Postdata(pst);


//     post.save();

// });

//search post
app.get("/posts/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    const id = req.params.id;

    Postdata.findOne({_id : id})
    .then(function(post){

        res.send(post);

    });

});
//edit post
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

app.get("/",(req,res)=>{
    res.send("VANNU")
});

// add new design
// app.get("/addpost",(req,res)=>
// {   
//     var pst={
//         postname : "WOODWORK Post name 2",
//         description : "WOODWORK Description 2",
//         image : "https://i.pinimg.com/originals/30/31/09/303109711ef0efb0505077bad2ead5b5.jpg",
//         category : "WOODWORK",
//     }

//     var post = Postdata(pst);
//     post.save();
//     res.send("success");
// });

app.listen(4000);