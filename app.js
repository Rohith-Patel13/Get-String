const express = require("express");
const app = express();
app.get("/", (requestObject, responseObject) => {
  responseObject.send("Express JS");
});
module.exports = app;
