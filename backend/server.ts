import express, { Express } from "express";

// express app
const app: Express = express();

// listen for requests
app.listen(4000, () => {
  console.log("listening on port 4000");
});
