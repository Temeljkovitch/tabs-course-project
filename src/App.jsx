import { useEffect } from "react";
import { useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";
import Loading from "./Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const handleClick = (index) => {
    setCurrentItem(index);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        handleClick={handleClick}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
