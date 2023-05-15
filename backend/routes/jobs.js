const express = require("express");
const {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");

const router = express.Router();

// Get all jobs
router.get("/", getJobs);

// Get a single job
router.get("/:id", getJob);

// Post a new job
router.post("/", createJob);

// Delete a job
router.delete("/:id", deleteJob);

// Update a job
router.patch("/:id", updateJob);

module.exports = router;
