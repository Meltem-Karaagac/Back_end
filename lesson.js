const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const host = "http://localhost";

const wrongPath = `${__dirname}//testFolder/int`;
const customFile = "custom.png";

const customPath = path.join(__dirname, "/testFolder");

app.get("*", (req, res) => {
  res.send(`Hello`);
});
app.listen(port, () => {
  console.log(`I'm listening on ${host}:${port}`);
});