const StudySession = require("../models/StudySession");

exports.createSession = async (req, res) => {
  try {
    const { subject, duration, notes } = req.body;
    const session = new StudySession({
      subject,
      duration,
      notes,
      user: req.userId
    });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: "Failed to save session" });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await StudySession.find({ user: req.userId }).sort({ date: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
};