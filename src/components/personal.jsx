import FormInput from "./form";

function PersonalInput({ isActive, onShow }) {
  return (
    <div
      className={
        "sidebarSection sidebarPersonal" + (isActive ? " active" : " inactive")
      }
    >
      <div className="sidebarUpper" onClick={onShow}>
        <h1>Personal Details</h1>
        {isActive ? <div className="arrow" /> : <div className="arrow down" />}
      </div>
      {isActive ? (
        <div className="sidebarLower">
          <div className="fullName">
            <FormInput name="First Name" type="text" />
            <FormInput name="Surname" type="text" />
          </div>
          <FormInput name="Street Address" type="text" />
          <div className="address">
            <FormInput name="City/Town" type="text" />
            <FormInput name="County/State" type="text" />
            <FormInput name="Post/Zipcode" type="text" />
          </div>
          <FormInput name="Email" type="email" />
          <FormInput name="Number" type="tel" />
        </ div>
      ) : null}
    </div>
  );
}

export default PersonalInput;
