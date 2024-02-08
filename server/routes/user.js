const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userSubscription");

router.post("/Subscription", controllers.userSubscription);

module.exports = router;
