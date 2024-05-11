function ExperienceSection({ experience, remove, id }) {
  return (
    <div>
      <h2>{experience.title}</h2>
      <div className="edit"/>
      <div className="bin" onClick={remove} id={id}/>
    </div>
  );
}

export default ExperienceSection;
