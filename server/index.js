const express = require("express");
const cors = require("cors");
const ctrl = require('./controller');

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

//Endpoints
app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune);


app.listen(4000, () => console.log("Server running on 4000"));
