var mongoose = require('mongoose'),  
    db = mongoose.createConnection('localhost', 'Index');
db.on('error', console.error.bind(console, 'connection error:')); 

function callback(){
    console.log("Done!");
}

var onErr = function(err, callback) {  
  db.close();
  callback(err);
};


exports.indexlist = function(word, callback) {  
  db.once('open', function() {
    var indexSchema = new mongoose.Schema({
        token : String,
        postings : String,
        positions : String,
        collectionFreq : Number,
        tfIdf : String
},{collection:'data'});
    var Index = db.model('Index', indexSchema);
    Index.find({  
    "token": "hello"
  }, function(err, results) {
    if (err) {
      onErr(err, callback);
    } else {
      mongoose.connection.close();
      console.log(results);
      callback("", results);
    }
  });; // end Team.find 
  }); // end db.once open 
}

var IndexSchema = new mongoose.Schema({
        token : String,
        postings : String,
        positions : String,
        collectionFreq : Number,
        tfIdf : String
},{collection:'data'});

var Index = db.model('Index', IndexSchema);



Index.find({  
    "token": "hello"
  }, function(err, results) {
    if (err) {
      onErr(err, callback);
    } else {
      mongoose.connection.close();
      console.log(results);
      callback("", results);
    }
  });

