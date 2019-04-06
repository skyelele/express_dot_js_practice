const express = require("express");
const app = express();
const router = express.Router();
const router2 = express.Router();

const data = require("./data");

router.get("/employees", (req, res) => res.send(data));

app.use("api", router);
app.use("/api/v2", router2);

app.use("/static", express.static("images"));

// app.get("/api/employees", (req, res) => res.send("Hello world!"));
// app.post("/api/employees", (req, res) => res.send("HTTP POST in action"));
// app.all("/api/employees", (req, res) => res.send(`${req.method} in action`));
// app.route('api/employees')
//   .get((req, res) => res.send('GET'));
//   .post((req, res) => res.send('POST'));

const port = 3000;

app.listen(port, () => console.info(`Server is listening on ${port}.`));
