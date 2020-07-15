const express = require('express');
const app = express();

//routes
const login = require("./routes/login");

//middleware
app.use(express.json());
app.use("/login", login);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));