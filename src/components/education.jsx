import FormInput from "./form";

function EducationInput({ isActive, onShow }) {
  return (
    <div className="sidebarSection sidebarEducation" onClick={onShow}>
      <div className="sidebarUpper">
        <h1>Education</h1>
        {isActive ? (
          <div className="up" />
        ) : (<div className="down" />) }
      </div>
      {isActive ? (
        <>
          <div className="nameCity">
            <FormInput name="School Name" type="text" />
            <FormInput name="Location" type="text" />
          </div>
          <div className="qualDate">
            <FormInput name="Qualification" type="text" />
            <FormInput name="Graduation Date" type="date" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default EducationInput;
