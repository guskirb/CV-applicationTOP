function FormInput({ name, type, details, onChange, id }) {
  return (
    <label>
      {name}
      <input type={type} value={details} onChange={onChange} id={id}></input>
    </label>
  );
}

export default FormInput;
