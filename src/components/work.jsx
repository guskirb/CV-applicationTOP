import FormInput from "./form";

function WorkInput({ details, onChange, isActive, onShow }) {
  return (
    <div
      className={
        "sidebarSection sidebarWork" + (isActive ? " active" : " inactive")
      }
    >
      <div className="sidebarUpper" onClick={onShow}>
        <h1>Work Experience</h1>
        {isActive ? <div className="arrow" /> : <div className="arrow down" />}
      </div>
      {isActive ? (
        <div className="sidebarLower">
          <div className="jobEmployer">
            <FormInput
              name="Job Title"
              type="text"
              details={details.title}
              onChange={onChange}
              id={"title"}
            />
            <FormInput
              name="Employer"
              type="text"
              details={details.employer}
              onChange={onChange}
              id={"employer"}
            />
          </div>
          <div className="dates">
            <FormInput
              name="Start Date"
              type="date"
              details={details.start}
              onChange={onChange}
              id={"start"}
            />
            <FormInput
              name="End Date"
              type="date"
              details={details.end}
              onChange={onChange}
              id={"end"}
            />
          </div>
          <label>
            Details
            <textarea
              rows="6"
              value={details.details}
              onChange={onChange}
              id={"details"}
            />
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default WorkInput;
