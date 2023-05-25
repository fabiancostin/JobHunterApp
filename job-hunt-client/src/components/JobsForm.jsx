import { useState } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

const JobsForm = () => {
  const { dispatch } = useJobsContext();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    } else {
      setTitle("");
      setCompany("");
      setStatus("");
      setError(null);
      setEmptyFields([]);
      console.log("new job added", json);
      dispatch({ type: "CREATE_JOB", payload: json });
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
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Company Name:</label>
      <input
        type="text"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        className={emptyFields.includes("company") ? "error" : ""}
      />

      <label>Status:</label>
      <input
        type="text"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
        className={emptyFields.includes("status") ? "error" : ""}
      />

      <button>Add Job</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default JobsForm;
