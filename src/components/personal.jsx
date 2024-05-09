import FormInput from "./form";

function PersonalInput() {
  return (
    <div className="sidebarSection sidebarPersonal">
      <h1>Personal Details</h1>
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
    </div>
  );
}

export default PersonalInput;
