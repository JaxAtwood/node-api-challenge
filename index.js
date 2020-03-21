const express = require("express");
const actionRouter = require("./data/helpers/actionRouter.js");
const projectRouter = require("./data/helpers/projectRouter.js");

const server = express();
server.use(express.json());

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge!</h2>`);
  });

server.listen(5555, () => {
     console.log("It\'s Working on Port: 5555!")
});
