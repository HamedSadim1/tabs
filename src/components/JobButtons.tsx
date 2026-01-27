import { IJOB } from "../types";
import { FaBriefcase } from "react-icons/fa";

interface JobButtonsProps {
  jobs: IJOB[];
  value: number;
  setValue: (index: number) => void;
}

const JobButtons = ({ jobs, value, setValue }: JobButtonsProps) => {
  return (
    <div
      className="btn-container btn-grid"
      role="tablist"
      aria-label="Job positions"
    >
      {jobs.map((job: IJOB, index: number) => {
        const isActive = index === value;
        return (
          <button
            key={job.id}
            className={`job-btn ${isActive ? "active-btn" : ""}`}
            onClick={() => setValue(index)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`job-panel-${job.id}`}
            id={`job-tab-${job.id}`}
            tabIndex={isActive ? 0 : -1}
          >
            <FaBriefcase className="btn-icon" />
            <span className="btn-text">{job.company}</span>
            {isActive && <div className="active-indicator"></div>}
          </button>
        );
      })}
    </div>
  );
};

export default JobButtons;
