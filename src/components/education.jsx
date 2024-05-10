import FormInput from "./form";

function EducationInput({ details, onChange, isActive, onShow }) {
  return (
    <div
      className={
        "sidebarSection sidebarEducation" + (isActive ? " active" : " inactive")
      }
    >
      <div className="sidebarUpper" onClick={onShow}>
        <h1>Education</h1>
        {isActive ? <div className="arrow" /> : <div className="arrow down" />}
      </div>
      {isActive ? (
        <div className="sidebarLower">
          <div className="nameCity">
            <FormInput
              name="School Name"
              type="text"
              details={details.school}
              onChange={onChange}
              id={"school"}
            />
            <FormInput name="Location" type="text" details={details.location}
              onChange={onChange}
              id={"location"}/>
          </div>
          <div className="qualDate">
            <FormInput name="Qualification" type="text" details={details.qualification}
              onChange={onChange}
              id={"qualification"}/>
            <FormInput name="Graduation Date" type="date" details={details.date}
              onChange={onChange}
              id={"date"} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EducationInput;
