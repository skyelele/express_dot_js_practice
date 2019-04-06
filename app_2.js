const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const data = require("./data");

router.get("/employees", (req, res) => res.send(data));

router.get("/employees/:id", (req, res) => {
  // Adding a + in front of req params id
  // makes it an integer.
  const id = +req.params.id;
  const employee = data.filter(data => data.id === id);
  return res.send(employee);
});

app.use("/api", router);

app.listen(port, () => console.info(`Server is listening on ${port}`));
