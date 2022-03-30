import express from "express";
import conversations from "./conversations.json";
import messages from "./messages.json";
import users from "./users.json";

const app = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/conversations:userId", (req, res) => {
  const data = conversations.filter((conversation) =>
    conversation.userIds.includes(req.params.userId)
  );
  res.json(data);
});

app.get("/messages/:conversationId", (req, res) => {
  // Check if conversationId exists
  if (
    !conversations.some(
      (conversation) => conversation.id === req.params.conversationId
    )
  ) {
    return res.json({ message: "404" });
  }

  const data = messages.filter(
    (message) => message.conversationId == req.params.conversationId
  );
  res.json(data);
});

app.get("/users/:userId", (req, res) => {
  const data = users.find((user) => user.id == req.params.userId);
  res.json(data ? { data: data } : { message: "404" });
});

app.listen(port, function () {
  console.log(`[!] Server is running at http://localhost:${port}/`);
});
