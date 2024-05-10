import FormInput from "./form";

function WorkInput({ isActive, onShow }) {
  return (
    <div className="sidebarSection sidebarWork" onClick={onShow}>
      <div className="sidebarUpper">
        <h1>Work Experience</h1>
        {isActive ? (
          <div className="up" />
        ) : (<div className="down" />) }
      </div>
      {isActive ? (
        <>
      <div className="jobEmployer">
        <FormInput name="Job Title" type="text" />
        <FormInput name="Employer" type="text" />
      </div>
      <div className="dates">
        <FormInput name="Start Date" type="date" />
        <FormInput name="End Date" type="date" />
      </div>
      <label>
        Details
        <textarea rows="6" />
      </label>
      </> ) : null}
    </div>
  );
}

export default WorkInput;
