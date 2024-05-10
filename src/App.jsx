import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import CV from "./components/cv";

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
    setWork([
      ...work,
      {
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

  function addEducation(e) {
    setEducation([
      ...education,
      {
        school: details.school,
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

  return (
    <>
      <Sidebar
        details={details}
        onChange={handleChange}
        addWork={addWork}
        addEducation={addEducation}
      />
      <div className="cvContainer">
        <CV />
      </div>
    </>
  );
}

export default App;
