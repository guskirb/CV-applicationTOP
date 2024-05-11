function ExperienceSection({ experience, remove, id, edit }) {
  return (
    <div>
      <h2>{experience.title}</h2>
      <div className="edit" onClick={edit} id={id} />
      <div className="bin" onClick={remove} id={id} />
    </div>
  );
}

export default ExperienceSection;
