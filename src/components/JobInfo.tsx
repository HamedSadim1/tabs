import { IJOB } from "../types";
import {
  FaAngleDoubleRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface JobInfoProps {
  job: IJOB;
}

const JobInfo = ({ job }: JobInfoProps) => {
  const { company, dates, duties, title, id } = job;

  return (
    <article
      className="job-info"
      role="tabpanel"
      aria-labelledby={`job-tab-${id}`}
      id={`job-panel-${id}`}
    >
      <div className="job-header">
        <div className="job-title-section">
          <h3 className="job-title">{title}</h3>
          <div className="company-badge">
            <FaMapMarkerAlt className="company-icon" />
            <span>{company}</span>
          </div>
        </div>
        <div className="job-date-section">
          <FaCalendarAlt className="date-icon" />
          <p className="job-date">{dates}</p>
        </div>
      </div>

      <div className="job-duties">
        <h4 className="duties-title">Key Responsibilities</h4>
        <div className="duties-list">
          {duties.map((duty: string, index: number) => {
            return (
              <div
                key={index}
                className="job-desc"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FaAngleDoubleRight className="job-icon" />
                <p className="duty-text">{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default JobInfo;
