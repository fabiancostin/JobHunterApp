const JobsDetails = ({ job }) => {
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
        <p>
          <strong>Status: </strong>
          {job.status}
        </p>
        <p>{job.createdAt}</p>
      </div>
    </>
  );
};

export default JobsDetails;
