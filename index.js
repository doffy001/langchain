require("dotenv").config();
const express = require("express");
const { ChatOpenAI } = require("@langchain/openai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");

const OUTPUT_LANGUAGE = "Vietnamese";
const INPUT_MESSAGE_BY_ENGLISH = "First application here!";

const app = express();
const port = 3000;
const chatPromptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "Translate the following from English into {language}"],
  ["human", "{message}"],
]);
const model = new ChatOpenAI({ model: "gpt-4" });
const parser = new StringOutputParser();

app.get("/", async (req, res) => {
  const chain = chatPromptTemplate.pipe(model).pipe(parser);
  const result = await chain.invoke({
    language: OUTPUT_LANGUAGE,
    message: INPUT_MESSAGE_BY_ENGLISH,
  });
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
