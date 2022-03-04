const express = require("express");
const cors = require("cors");
const ctrl = require('./controller');

const app = express();
app.use(express.json());

app.use(cors())

//Endpoints
app.get("/api/compliments", ctrl.getCompliment);
app.get("/api/fortunes", ctrl.getFortune);
app.get("/api/all", ctrl.getAll);
app.post("/api/item", ctrl.submitItem);
app.delete("/api/item/:id", ctrl.deleteItem);

app.listen(4000, () => console.log("Server running on 4000"));