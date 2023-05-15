import { useState } from "react";

const JobsForm = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const job = { title, company, status };

    const response = await fetch("http://localhost:4000/api/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setCompany("");
      setStatus("");
      setError(null);
      console.log("new job added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a Job</h3>

      <label>Job Name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Company Name:</label>
      <input
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />

      <label>Status:</label>
      <input
        type="text"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      />

      <button>Add Job</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JobsForm;
