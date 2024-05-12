import { useState } from "react";
import PersonalInput from "./personal";
import WorkInput from "./work";
import EducationInput from "./education";
import SkillsInput from "./skills";

function Sidebar({
  details,
  onChange,
  addWork,
  work,
  removeWork,
  editWork,
  addEducation,
  education,
  removeEducation,
  editEducation,
  addSkill,
  skills,
  removeSkill,
  editSkill
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar">
      <PersonalInput
        details={details}
        onChange={onChange}
        isActive={activeIndex === 0}
        onShow={() =>
          activeIndex === 0 ? setActiveIndex("") : setActiveIndex(0)
        }
      />
      <WorkInput
        details={details}
        onChange={onChange}
        isActive={activeIndex === 1}
        onShow={() =>
          activeIndex === 1 ? setActiveIndex("") : setActiveIndex(1)
        }
        addWork={addWork}
        work={work}
        removeWork={removeWork}
        editWork={editWork}
      />
      <EducationInput
        details={details}
        onChange={onChange}
        isActive={activeIndex === 2}
        onShow={() =>
          activeIndex === 2 ? setActiveIndex("") : setActiveIndex(2)
        }
        addEducation={addEducation}
        education={education}
        removeEducation={removeEducation}
        editEducation={editEducation}
      />
      <SkillsInput
        details={details}
        onChange={onChange}
        isActive={activeIndex === 3}
        onShow={() =>
          activeIndex === 3 ? setActiveIndex("") : setActiveIndex(3)
        }
        addSkill={addSkill}
        skills={skills}
        removeSkill={removeSkill}
        editSkill={editSkill}
      />
    </div>
  );
}

export default Sidebar;
