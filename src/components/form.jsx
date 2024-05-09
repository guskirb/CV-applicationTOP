function FormInput({ name, type }) {
  return (
    <label>
      {name}
      <input type={type}></input>
    </label>
  );
}

export default FormInput;
