import FormInput from "./form";
import ExperienceSection from "./experience-section";

function EducationInput({
  details,
  onChange,
  isActive,
  onShow,
  addEducation,
  education,
  removeEducation,
  editEducation
}) {
  const listEducation = education.map((item) => (
    <div
      key={item.id.toString()}
      className={"experienceList" + (isActive ? " active" : " inactive")}
    >
      <ExperienceSection
        experience={item}
        remove={removeEducation}
        id={item.id}
        edit={editEducation}
      />
    </div>
  ));

  return (
    <>
      <div
        className={
          "sidebarSection sidebarEducation" +
          (isActive ? " active" : " inactive")
        }
      >
        <div className="sidebarUpper" onClick={onShow}>
          <div className="schoolIcon"></div>
          <h1>Education</h1>
          {isActive ? (
            <div className="arrow" />
          ) : (
            <div className="arrow down" />
          )}
        </div>
        {isActive && (
          <div className="sidebarLower">
            <div className="nameCity">
              <FormInput
                name="School Name"
                type="text"
                details={details.school}
                onChange={onChange}
                id={"school"}
              />
              <FormInput
                name="Location"
                type="text"
                details={details.location}
                onChange={onChange}
                id={"location"}
              />
            </div>
            <div className="qualDate">
              <FormInput
                name="Qualification"
                type="text"
                details={details.qualification}
                onChange={onChange}
                id={"qualification"}
              />
              <FormInput
                name="Graduation Date"
                type="date"
                details={details.date}
                onChange={onChange}
                id={"date"}
              />
            </div>
            <button onClick={addEducation}> + </button>
          </div>
        )}
      </div>
      {isActive && <>{listEducation}</>}
    </>
  );
}

export default EducationInput;
