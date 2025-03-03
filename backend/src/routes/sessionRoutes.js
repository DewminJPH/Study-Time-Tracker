const express = require("express");
const router = express.Router();
const { createSession, getSessions } = require("../controllers/studySessionController");
const auth = require("../../middleware/auth");

router.post("/", auth, createSession);
router.get("/", auth, getSessions);

module.exports = router;