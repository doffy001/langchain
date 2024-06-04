require("dotenv").config();
const express = require("express");
const { ChatOpenAI } = require("@langchain/openai");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");

const app = express();
const port = 3000;
const model = new ChatOpenAI({model: "gpt-4"});
const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

app.get("/", async(req, res) => {
  const result = await model.invoke(messages);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
