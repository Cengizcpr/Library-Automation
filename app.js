var fs = require('fs');
var path=require('path');
const mongoose = require('mongoose');
var express = require('express');
var app=express();
var bodyParser=require("body-parser");
 
mongoose.connect('mongodb://localhost:27017/UsersData'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
})


app.set('view engine','ejs');
app.set('view',path.join(__dirname,'/app_server/views'));

var routeLogin=require('./app_server/routes/LoginRoute');
var routeRegister=require('./app_server/routes/RegisterRoute');
var routeLibrary=require('./app_server/routes/LibraryRoute');//dosyayının yolunu değişkene atadık
var routeAddbook=require('./app_server/routes/AddbookRoute');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));//public klasörünü public yaptık

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.post('/login', function(req,res){ 
    mongoose.connect('mongodb://localhost:27017/UsersData', function(err, db) {

        db.collection('details').findOne({ name: req.body.username}, function(err, user) {
            if(user ===null){
               
                res.redirect('/login');
               
           }
           else if  (user.name === req.body.username && user.password === req.body.password){
            return res.redirect('/library');
         } 
        else{
          
            res.redirect('/login');
        }
  });

})
})

app.post('/register', function(req,res){ 
    var name = req.body.username; 
    var email =req.body.email; 
    var pass = req.body.password; 
    //var phone =req.body.phone; 
  
    var data = { 
        "name": name, 
        "email":email, 
        "password":pass, 
        //"phone":phone 
    } 
db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    return res.redirect('/login'); 
})

app.get('/',function(req,res){ 
    res.set({ 
        'Access-control-Allow-Origin': '*'
        }); 
    return res.redirect('Register.html'); 
    })


app.use('/login',routeLogin);
app.use('/login/register',routeRegister);
app.use('/library',routeLibrary);
app.use('/library/addbook',routeAddbook);


app.listen(8000);


