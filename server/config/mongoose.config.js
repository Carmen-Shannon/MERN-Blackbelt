const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/pet_shelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
  })
  .then(() => console.log("---------- Connected to database ----------"))

  .catch((error) => console.log(error));
