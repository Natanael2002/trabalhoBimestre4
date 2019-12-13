// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://cliente:<password>@mongodb-sppmi.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

    // conectar
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error ao conectar:'));
db.once('open', function() {
});

var Schema = new mongoose.Schema({
    name: String
    // value: Number
    // comment: Text
  });

var cliente = mongoose.model('client', Schema);

var silence = new cliente({ name: 'Silence' });
console.log(silence.name); 