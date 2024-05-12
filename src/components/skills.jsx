import FormInput from "./form";
import ExperienceSection from "./experience-section";

function SkillsInput({
  details,
  onChange,
  isActive,
  onShow,
  addSkill,
  skills,
  removeSkill,
  editSkill
}) {
    const listSkill = skills.map((item) => (
        <div
          key={item.id.toString()}
          className={"experienceList" + (isActive ? " active" : " inactive")}
        >
          <ExperienceSection
            experience={item}
            remove={removeSkill}
            id={item.id}
            edit={editSkill}
          />
        </div>
      ));
  return (
    <>
      <div
        className={
          "sidebarSection sidebarSkills" + (isActive ? " active" : " inactive")
        }
      >
        <div className="sidebarUpper" onClick={onShow}>
          <div className="skillsIcon"></div>
          <h1>Skills</h1>
          {isActive ? (
            <div className="arrow" />
          ) : (
            <div className="arrow down" />
          )}
        </div>
        {isActive && (
          <div className="sidebarLower">
            <FormInput
              name="Skill"
              type="text"
              details={details.skill}
              onChange={onChange}
              id={"skill"}
            />
            <button onClick={addSkill}> + </button>
          </div>
        )}
      </div>
      {isActive && <>{listSkill}</>}
    </>
  );
}

export default SkillsInput;
