var fs = require('fs');
var path=require('path');
var express = require('express');
var app=express();
var ejsLayouts=require('express-ejs-layouts');
var bodyParser=require('body-parser');
var db=require('./app_server/models/db');
app.set('view engine','ejs');

app.set('views', path.join(__dirname, '/app_server/views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(ejsLayouts);

app.use('/public', express.static(path.join(__dirname, 'public')));

//Routes
require('./app_server/routes/routeManager')(app);

app.listen(8000);
