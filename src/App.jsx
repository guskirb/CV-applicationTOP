import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import CV from "./components/cv";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [details, setDetails] = useState({
    first: "",
    last: "",
    email: "",
    num: "",
    website: "",
    about: "",
    role: "",
    title: "",
    employer: "",
    start: "",
    end: "",
    details: "",
    school: "",
    location: "",
    qualification: "",
    date: "",
  });
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);

  function handleChange(e) {
    setDetails({ ...details, [e.target.id]: e.target.value });
  }

  function addWork(e) {
    if (details.title === "") {
      return;
    }
    setWork([
      ...work,
      {
        id: uuidv4(),
        title: details.title,
        employer: details.employer,
        start: details.start,
        end: details.end,
        details: details.details,
      },
    ]);
    setDetails({
      ...details,
      title: "",
      employer: "",
      start: "",
      end: "",
      details: "",
    });
  }

  function removeWork(e) {
    setWork(work.filter((item) => item.id !== e.target.id));
  }

  function editWork(e) {
    const current = work.find((element) => element.id === e.target.id);

    setDetails({
      ...details,
      title: current.title,
      employer: current.employer,
      start: current.start,
      end: current.end,
      details: current.details,
    });

    setWork(work.filter((item) => item.id !== e.target.id));
  }

  function addEducation(e) {
    if (details.school === "") {
      return;
    }
    setEducation([
      ...education,
      {
        id: uuidv4(),
        title: details.school,
        location: details.location,
        qualification: details.qualification,
        date: details.date,
      },
    ]);
    setDetails({
      ...details,
      school: "",
      location: "",
      qualification: "",
      date: "",
    });
  }

  function removeEducation(e) {
    setEducation(education.filter((item) => item.id !== e.target.id));
  }

  function editEducation(e) {
    const current = education.find((element) => element.id === e.target.id);

    setDetails({
      ...details,
      school: current.title,
      location: current.location,
      qualification: current.qualification,
      date: current.date,
    });

    setEducation(education.filter((item) => item.id !== e.target.id));
  }

  return (
    <>
      <Sidebar
        details={details}
        onChange={handleChange}
        addWork={addWork}
        work={work}
        removeWork={removeWork}
        editWork={editWork}
        addEducation={addEducation}
        education={education}
        removeEducation={removeEducation}
        editEducation={editEducation}
      />
      <div className="cvContainer">
        <CV details={details} work={work} education={education} />
      </div>
    </>
  );
}

export default App;
