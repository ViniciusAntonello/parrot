const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, ()=> { console.log(`Servidor rodando na porta 3333 🚀`) });