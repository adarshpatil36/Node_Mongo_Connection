var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learningmongo"

var findDocuments = (db, callback) =>{
    var collection = db.collection('movie');
    
    collection.find().toArray(function(err, docs){
        console.log("In fuction call")
        console.log(docs);
        callback;
    });
}


MongoClient.connect(url, function(err, db ){
    console.log("DB Connected Successfully")
    findDocuments(db,function(){
        db.close();
    })
})