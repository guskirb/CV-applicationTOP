function CV({ details, work, education }) {
  return (
    <div className="cv">
      <div className="cvProfile">
        <div className="profilePic"></div>
        <h2>Personal Details</h2>
        <div>
          <div className="phoneIcon" />
          <h3>Phone Number</h3>
        </div>
        <p>{details.num}</p>
        <div>
          <div className="emailIcon" />
          <h3>Email Address</h3>
        </div>
        <p>{details.email}</p>
        <div>
          <div className="websiteIcon" />
          <h3>Website</h3>
        </div>
        <p>{details.website}</p>
      </div>
      <div className="cvDetails">
        <h1>{details.first + " " + details.last}</h1>
        <h2>{details.role}</h2>
        <p>{details.about}</p>
      </div>
    </div>
  );
}

export default CV;
