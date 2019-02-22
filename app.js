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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbName = "address";
const viewUrl = "_design/all_customers/_view/new-view";

app.get('/', function (req, res) {
    couch.get(dbName, viewUrl).then(
        function (data, headers, status) {
            console.log(data.data.rows);
            res.render('index', {
                address: data.data.rows
            });
        }, function (err) {
            res.send(err);
        });
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});
couch.listDatabases().then(function (dbs) {
    console.log(dbs);
});



