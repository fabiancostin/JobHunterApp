const Job = require("../models/JobModel");
const mongoose = require("mongoose");

// get all jobs
const getJobs = async (req, res) => {
  const jobs = await Job.find({}).sort({ createdAt: -1 });
  res.status(200).json(jobs);
};

// get a single job
const getJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job!" });
  }

  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ error: "No such job!" });
  }

  res.status(200).json(job);
};

// create new job
const createJob = async (req, res) => {
  const { title, company, status } = req.body;

  // add document to db
  try {
    const job = await Job.create({ title, company, status });
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  // check if the id is a valid one
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job!" });
  }

  const job = await Job.findOneAndDelete({ _id: id });

  if (!job) {
    return res.status(404).json({ error: "No such job!" });
  }

  res.status(200).json(job);
};

// update a job
const updateJob = async (req, res) => {
  const { id } = req.params;

  // check if the id is a valid one
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job!" });
  }

  const job = await Job.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!job) {
    return res.status(404).json({ error: "No such job!" });
  }

  res.status(200).json(job);
};

module.exports = {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
};
