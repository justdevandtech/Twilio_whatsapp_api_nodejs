const express = require("express");
const router = express.Router();

const  post  =  require("../controller/send.js");

router.post("/", post);


module.exports = router;