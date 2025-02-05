const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const downtime_request_routes = require("./routes/chat_routes");

app.use(downtime_request_routes);
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules", "bootstrap", "dist"))
);

app.engine("hbs", engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

app.listen(3000, (req, res) => {
  console.log(`Server is running on 3000 PORT`);
});

app.use("/", (req, res) => {
  res.send("test");
});
