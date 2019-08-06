var routeLogin=require('./loginRoutes');

var routeHome=require('./homeRoutes');

var routeRegister = require('./registerRoutes');

var routeAddbook = require('./addbookRoutes');

var routeSearchbook = require('./searchbookRoutes');

var routeGivebook = require('./givebookRoutes');

var routeReceivebook = require('./receivebookRoutes');

module.exports= function(app){

    app.use('/login',routeLogin);

    app.use ('/login/signup',routeRegister);
    
    app.use('/home',routeHome);

    app.use ('/home/addbook',routeAddbook);

    app.use ('/home/searchbook',routeSearchbook);

    app.use ('/home/givebook', routeGivebook);

    app.use ('/home/receivebook', routeReceivebook);
};