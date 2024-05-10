import { useState } from "react";
import PersonalInput from "./personal";
import WorkInput from "./work";
import EducationInput from "./education";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="sidebar">
      <PersonalInput
        isActive={activeIndex === 0}
        onShow={() => activeIndex === 0 ? setActiveIndex("") : setActiveIndex(0)}
      />
      <WorkInput
      isActive={activeIndex === 1}
      onShow={() => activeIndex === 1 ? setActiveIndex("") : setActiveIndex(1)}
      />
      <EducationInput
      isActive={activeIndex === 2}
      onShow={() => activeIndex === 2 ? setActiveIndex("") : setActiveIndex(2)}
      />
    </div>
  );
}

export default Sidebar;
