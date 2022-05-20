const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/pet_shelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("---------- Connected to database ----------"))

  .catch((error) => console.log(error));
