import express from "express";
import { renderApplication } from "@angular/platform-server";
import { bootstrap } from "./src/main.server";
import { config } from "./src/app/app.config.server";

const app = express();
const port = process.env["PORT"] || 4000;

app.get("*", async (req, res, next) => {
  try {
    const html = await renderApplication(bootstrap, {
      url: req.url,
      ...config,
    });
    res.send(html);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
