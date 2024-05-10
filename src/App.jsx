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

  function handleChange(e) {
    setDetails({ ...details, [e.target.id]: e.target.value});
  }

  return (
    <>
      <Sidebar details={details} onChange={handleChange} />
      <div className="cvContainer">
        <CV />
      </div>
    </>
  );
}

export default App;
