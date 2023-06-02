import express from "express";
import React from "react";
import { renderToStream } from "react-streaming/server";
import Page from "./Page.jsx";

const app = express();

app.use("/static", express.static("public"));

app.use(async (req, res, next) => {
  try {
    const { pipe, injectToStream } = await renderToStream(
      <div id="root">
        <Page />
      </div>,
      { disable: false }
    );

    pipe(res);
    injectToStream('<script src="/static/client-build.js"></script>');
  } catch (error) {
    console.log("server side error!", error);
  }
});

app.listen("3001", () => {
  console.log("localhost:3001");
});
