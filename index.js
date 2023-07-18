const express = require("express");
const cors = require("cors");
const router = require('./routes/routes');
require('./database/databse');

const app = express();

const PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening to the PORT ${PORT}.`);
});
