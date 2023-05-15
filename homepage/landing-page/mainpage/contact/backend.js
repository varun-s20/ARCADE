import express from 'express';
import cors from 'cors';
//const bodyParser = require('body-parser');
import { createConnection } from 'mysql';
// create express app
const app = express();
// Setup server port
const port = 5000;
const conn = createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'devjams',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) {
    throw err;
    }
    console.log("Database Connected!");
  });

  // CORS is enabled for all origins
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
//app.use(bodyParser.json())
// define a root route

app.use(express.json()); //to accept data in json format 
// app.use(express.urlencoded()); //to decode data sent through html form
// app.use(express.static('public'));

  app.post('/devjams.feedbackform', (req, res) => {
    // console.log("Hello",req.body.phoneno)
    var sql= `insert into devjams.feedbackform(name, email, phoneno, feedback) values ("${req.body.name}","${req.body.email}","${req.body.phoneno}","${req.body.feedback}")`;
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

 


