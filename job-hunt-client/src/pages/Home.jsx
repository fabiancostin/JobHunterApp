import { useEffect } from "react";
import { useJobsContext } from "../hooks/useJobsContext";

// components
import JobsDetails from "../components/JobsDetails";
import JobsForm from "../components/JobsForm";

const Home = () => {
  const { jobs, dispatch } = useJobsContext();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("http://localhost:4000/api/jobs");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_JOBS", payload: json });
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="home">
      <div className="jobs">
        {jobs && jobs.map((job) => <JobsDetails key={job._id} job={job} />)}
      </div>
      <JobsForm />
    </div>
  );
};

export default Home;
