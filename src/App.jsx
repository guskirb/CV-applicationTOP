import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import CV from "./components/cv";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [details, setDetails] = useState({
    first: "",
    last: "",
    street: "",
    city: "",
    county: "",
    post: "",
    email: "",
    num: "",
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
    console.log(work);
  }

  function removeWork(e) {
    setWork(work.filter(item => item.id !== e.target.id));
    console.log(work);
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
    setEducation(education.filter(item => item.id !== e.target.id));
  }

  return (
    <>
      <Sidebar
        details={details}
        onChange={handleChange}
        addWork={addWork}
        work={work}
        removeWork={removeWork}
        addEducation={addEducation}
        education={education}
        removeEducation={removeEducation}
      />
      <div className="cvContainer">
        <CV />
      </div>
    </>
  );
}

export default App;
