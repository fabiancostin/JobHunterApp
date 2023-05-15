import { useEffect, useState } from "react";

// components
import JobsDetails from "../components/JobsDetails";

const Home = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:4000/api/jobs");
      const json = await response.json();

      if (response.ok) {
        setJobs(json);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="home">
      <div className="jobs">
        {jobs && jobs.map((job) => <JobsDetails key={job._id} job={job} />)}
      </div>
    </div>
  );
};

export default Home;
