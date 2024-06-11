// mongodb+srv://central:<password>@scentral.ugunggv.mongodb.net/

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://central:<password>@scentral.ugunggv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("MongoDB Connection error");
  console.error(error);
});

db.once("open", function () {
  console.log("Connection established");
});