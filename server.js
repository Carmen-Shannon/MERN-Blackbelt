const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(express.json(), express.urlencoded({ extended: true })); // Enables POST requests
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/pet.routes")(app);

app.listen(port, () => console.log(`Running on port: ${port}`));