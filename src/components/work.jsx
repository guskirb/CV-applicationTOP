import FormInput from "./form";

function WorkInput() {
  return (
    <div className="sidebarSection sidebarWork">
      <h1>Work Experience</h1>
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
    </div>
  );
}

export default WorkInput;
