import FormInput from "./form";

function EducationInput({ isActive, onShow }) {
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
            <FormInput name="School Name" type="text" />
            <FormInput name="Location" type="text" />
          </div>
          <div className="qualDate">
            <FormInput name="Qualification" type="text" />
            <FormInput name="Graduation Date" type="date" />
          </div>
        </ div>
      ) : null}
    </div>
  );
}

export default EducationInput;
