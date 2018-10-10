var Todo = require('./models/todo');
var User  = require('./models/user');
var Brand = require('./models/brand');
var bcrypt = require('bcrypt');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

function getUser(res) {
    User.find(function (err, users) {
        if (err) {
            res.send(err);   
        }
        res.json(users);
    });
};

function getBrand(res) {
    Brand.find(function (err, brands) {
        if (err) {
            res.send(err);
        }
        res.json(brands);
    });
};


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/users', function (req, res) {
        getUser(res);
    });

    //marcas
    app.get('/api/brands', function (req, res) {
        getBrand(res);
    });
    // create todo and send back all todos after creation
    app.post('/api/users', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        User.create({
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            user: req.body.username,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getUser(res);
        });

    });
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    app.post('/api/brands', function(req, res) {
        var bdy = req.body;
        // create a todo, information comes from AJAX request from Angular
        Brand.create({
            id: bdy.id,
            brand: bdy.brand,
            slogan: bdy.slogan ,
            icon: bdy.icon ,
            detail: bdy.detail ,
            email: bdy.email,
            tel: bdy.tel,
            done: false
        }, function (err, brand) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getBrand(res);
            });
        
        


    });

    // application -------------------------------------------------------------
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    app.get('/admin',function (req, res) {
        res.sendFile(__dirname +'/public/login/index.html');
        });

   

};

   

