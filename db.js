var mongoClient = require("mongodb").mongoClient;
mongoClient.connect("mongodb://rodrigo:digo2019@cluster0-mxejc.mongodb.net/test"),
    function(err, conn){
        if(err) return console.log(err);
        global.db = conn;
    })

function saveCustomer(nome, idade, callback){
    global.db.collection("customers").insert({nome, idade}, function(err, result){
        if(err) return console.log(err);
        callback();
    })
}

function findCustomers(callback){
    global.db.collection("customers").find().toArray(function(err, docs){
        if(err) return console.log(err);
        callback(docs);
    })
}
module.exports = { saveCustomer, findCustomers}