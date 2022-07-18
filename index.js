const express = require("express");
const db = require("./configs/mongoose");
const path = require("path");
const cors = require("cors");
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const Contact = require("./models/contact");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.set("views", "./views");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: " Express API with Swagger",
//       version: "0.1.0",
//       description:
//         "This is a simple CRUD API application made with Express and documented with Swagger",
//       license: {
//         name: "MIT",
//         url: "https://spdx.org/licenses/MIT.html",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:8000",
//       },
//     ],
//   },
//   apis: ["./routes/index.js"],
// };
// const specs = swaggerJsdoc(options);

// app.use(
//   "/contact-api",
//   swaggerUi.serve,
//   swaggerUi.setup(specs, { explorer: true })
// );
app.use("/", require("./routes"));

app.listen(8000, () => {
  console.log("Server is running on port:8000");
});
