import FormInput from "./form";

function PersonalInput({ isActive, onShow }) {
  return (
    <div className="sidebarSection sidebarPersonal" onClick={onShow}>
      <div className="sidebarUpper">
        <h1>Personal Details</h1>
        {isActive ? (
          <div className="up" />
        ) : (<div className="down" />) }
      </div>
      {isActive ? (
        <>
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
        </>
      ) : null}
    </div>
  );
}

export default PersonalInput;
