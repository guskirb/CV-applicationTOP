import PersonalInput from "./personal";
import WorkInput from "./work";
import EducationInput from "./education";

function Sidebar() {
  return (
    <div className="sidebar">
      <PersonalInput />
      <WorkInput />
      <EducationInput/>
    </div>
  );
}

export default Sidebar;
