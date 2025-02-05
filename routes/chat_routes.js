const express = require("express");
const router = express.Router();
const { createRequest } = require("../controllers/chat_controller");

router.route("/request_form").get(createRequest);

module.exports = router;
