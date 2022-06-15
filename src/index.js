const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const handleError = require("./middlewares/handleError")

require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleError);

app.listen(3333, ()=> { console.log(`Servidor rodando na porta 3333 🚀`) });