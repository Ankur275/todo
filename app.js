const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");

const connectDatabase = require('./conn/conn')

const app = express();
app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, './.env') });

connectDatabase();

app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
