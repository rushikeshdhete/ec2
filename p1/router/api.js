const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hii rushi this side");
});

module.exports = router;