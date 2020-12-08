const MongoDB = require('mongodb').MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "Men_Category_Suit";

MongoDB.connect(dbURL , (error , client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("Men_Suit")
      .find()
      .toArray((error , data) => {
          if (error) throw error;
          console.log(data);
      })
});

