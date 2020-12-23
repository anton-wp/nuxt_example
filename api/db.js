var MongoClient = require('mongodb').MongoClient;

let state = {
  db: null,

}
exports.connect = (url, done) => {
  if (state.db) {
    return done()
  }
  MongoClient.connect(url, function (err, database) {
    if (err) {
      return done(err);
    }
    state.db = database.db('students');
    done();
  })
}

exports.get = () => state.db;
