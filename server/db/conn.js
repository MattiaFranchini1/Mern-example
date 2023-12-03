// Versione di mongodb 4.0.0 altrimenti con la 6.2.0 non funziona!!!

const { MongoClient } = require("mongodb");

//mongodb Atlas address
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        //_db = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
