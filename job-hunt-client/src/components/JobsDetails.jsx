import { useJobsContext } from "../hooks/useJobsContext";

const JobsDetails = ({ job }) => {
  const { dispatch } = useJobsContext();

  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/jobs/" + job._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_JOB", payload: json });
    }
  };

  const handleEdit = () => {};

  return (
    <>
      <div className="job-details">
        <div className="job-details-top">
          <h4>{job.title}</h4>
          <p>
            <strong>Company: </strong>
            {job.company}
          </p>
        </div>
        <div className="job-details-bottom">
          <div>
            <p>
              <strong>Status: </strong>
              {job.status}
            </p>
            <p>{job.createdAt}</p>
          </div>
          <div className="job-details-btns">
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsDetails;
