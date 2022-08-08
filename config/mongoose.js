const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rishuBackend:rishuBackend@cluster0.9j9zd5p.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});




const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting mongodb"));

db.once("open", function () {
  console.log("connected to database");
});

module.exports = db;
