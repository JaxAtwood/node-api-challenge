const express = require("express");
const Action = require("../helpers/actionModel");

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send(`<h2>actionRouter Page</h2>`);
//   });

//GET ALL ACTIONS
router.get("/", (req, res) => {
    Action.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "500/catch for GET"})
        })
})


router.get("/:id", (req, res) => {
    const {id} = req.params;

    Action.get(id)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ errorMessage: "404/catch for GET/:id" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "The comments information could not be retrieved."});
        });
})



  

module.exports = router;