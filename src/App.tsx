import { useState, useEffect } from "react";
import { IJOB } from "./types";
import { jobsData } from "./data/jobs";
import JobButtons from "./components/JobButtons";
import JobInfo from "./components/JobInfo";
import { FaInfoCircle } from "react-icons/fa";

function App() {
  const [jobs] = useState<IJOB[]>(jobsData);
  const [value, setValue] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Handle job switching with transition
  const handleJobChange = (newValue: number) => {
    if (newValue !== value) {
      setIsTransitioning(true);
      setTimeout(() => {
        setValue(newValue);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const newValue = value === 0 ? jobs.length - 1 : value - 1;
        handleJobChange(newValue);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        const newValue = value === jobs.length - 1 ? 0 : value + 1;
        handleJobChange(newValue);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jobs.length, value]);

  return (
    <section className="section">
      <div className="title">
        <h2>Professional Experience</h2>
        <div className="underline"></div>
        <p className="subtitle">
          Click on company names or use arrow keys to navigate
        </p>
      </div>
      <div className="jobs-center">
        <JobButtons jobs={jobs} value={value} setValue={handleJobChange} />
        <div
          className={`job-content ${isTransitioning ? "transitioning" : ""}`}
        >
          <JobInfo job={jobs[value]} />
        </div>
      </div>
      <div className="actions">
        <button type="button" className="btn primary-btn">
          <FaInfoCircle className="btn-icon" />
          View Full Resume
        </button>
        <div className="navigation-hint">
          <span>Use ← → arrow keys to navigate</span>
        </div>
      </div>
    </section>
  );
}

export default App;
