import express from "express";
import conversations from "./conversations.json";
import messages from "./messages.json";
import users from "./users.json";

const app = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

