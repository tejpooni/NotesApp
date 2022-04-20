
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql');
const { request } = require('express');

app.use(express());
// app.use(cors());
 app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true,
        withCredentials: true,
        allowedHeaders : '*',
        // origins: '*',
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }
 ));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     next();
//   });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// // default route
// app.get('/', function (req, res) {
//     return res.send({ error: true, message: 'hello' })
// });

// connection configurations
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Starwars101',
    database: 'Users'
});

// connect to database
dbConn.connect();

// app.get('/blah', cors(),function (req, res) {
//     // console.log("username="+req.query.name+" password="+req.query.password);
//      console.log("got a request for username = ")
//     var query ="SELECT * FROM userinfo";
//     // console.log(query)
//     dbConn.query(query, function (error, results, fields) {
//         if (error) throw error;
//         console.log(results)
//         return res.send({
//             data: results
//         })
//     });
    
// });


// app.get('/user', cors(),function (req, res) {
//     // console.log("username="+req.query.name+" password="+req.query.password);
//      console.log("got a request for username = ")
//     var query ="SELECT * FROM userinfo";
//     // console.log(query)
//     dbConn.query(query, function (error, results, fields) {
//         if (error) throw error;

//         console.log(results)

//         return res.send({
//             data: results
//         })
//     });
    
// });

//res server -> client
//req client -> server 


app.post('/login', cors(), (req,res) =>{

    console.log("validating if passwords match")
    const username= req.body.username;
    const password= req.body.password;
    var status = " ";
    var query = "select * from userinfo where username = ? and password = ? ";
    res.setHeader("Access-Control-Allow-Credentials", "true")
    
    dbConn.query(query,[username,password] ,(err,result)=>{
        // console.log(result[0].username);
        if(err) {
            res.send({err: err});
            status = "fail";
        }
        else if(result.length == 0){
            res.send({errormessage: "Incorrect username/password combination"})
        }
        else if((result[0].username == username) && (result[0].password == password)){
            res.send(result)
            res.statusCode=200
            status = "success";
        }
     
        console.log("got past cond")
    });

})

//query to insert new user to db
app.post('/register', cors(), (req,res)=>{

    console.log("got the call********");
    const username= req.body.username;
    const password= req.body.password;


    var q = "SELECT username FROM userinfo WHERE username = "+"'"+username+"'";
    dbConn.query(q,(err,result1)=>{

        if(err){
            res.send({err: err});
        }
        else if(result1.length == 0){//new user
            dbConn.query("insert into userinfo (username, password) values (?,?)",[username,password],(err,result2)=>{
                if(err){
                    res.send({err:err});
                }
                else{
                    console.log("successfully added new user" + result2)
                    res.send(result2)
                }
            });
        }
        else if(result1.length != 0){
            console.log("username taken")
            res.send({message:"username taken"})
        }

    });

    // dbConn.query(
    // "insert into userinfo (username, password) values (?,?)", 
    // [username,password], 
    // (err,result) =>{
    //     // console.log(err);
    //     if(err){
    //         res.send({err:err});
    //     }
    //     else if(result.length != 0){
    //         dbConn.query("SELECT username FROM userinfo WHERE username = '"+ user +"'",[username], function(err, result2 ){
    //             if(err){
    //                 res.send({err:err});
    //             }
    //             else if(result2.length == 0){
    //                 //new user logic
    //             }    
    //             else{  
    //             //existing user, redirect to another page 
    //             }
    //         })
    //     }
    // });
    // res.send("200")
});



//res server -> client
//req client -> server 

// Retrieve all users
// app.get('/users', function (req, res) {
//     console.log("username="+req.query.name+" password="+req.query.password);
//     // var user = req.query.name; 
//     var col = "tej";
//     console.log("got a request for username = "+col)
//     var query ="SELECT password FROM userinfo where username='"+col+"'";
//     console.log(query)
//     dbConn.query(query, function (error, results, fields) {
//         if (error) throw error;
//         console.log(results)
//         console.log(fields)

//         if(results[0].password != req.query.password){
//             return res.send({
//                 error: false
//             })
//         }
//         else{
//             return res.send({
//                 error:true
//             })
//         }

//         console.log(results[0].password);
//         return res.send(
//             { error: false, 
//                data: results, message: 'users list.' });
//     });
    
// });



app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});

module.exports = app;