const path = require("path");
// const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");

// router.use(express.static(path.join(__dirname, '../client/build/')));
// router.use('/static', express.static(path.join(__dirname, 'public')))

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;