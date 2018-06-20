const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');
const couch = new NodeCouchDb({
    auth: {
        user: 'lactif',
        pass: '#infy123'
    }
});


const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.send("Working...fine SUPer");
});

app.listen(3000,function(){
console.log('Server started on port 3000');
});
couch.listDatabases().then(function(dbs){
    console.log(dbs);
});