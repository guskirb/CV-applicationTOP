import FormInput from "./form";

function PersonalInput({ details, onChange, isActive, onShow }) {
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
            <FormInput
              name="First Name"
              type="text"
              details={details.first}
              onChange={onChange}
              id={"first"}
            />
            <FormInput
              name="Surname"
              type="text"
              details={details.last}
              onChange={onChange}
              id={"last"}
            />
          </div>
          <FormInput
            name="Street Address"
            type="text"
            details={details.street}
            onChange={onChange}
            id={"street"}
          />
          <div className="address">
            <FormInput
              name="City/Town"
              type="text"
              details={details.city}
              onChange={onChange}
              id={"city"}
            />
            <FormInput
              name="County/State"
              type="text"
              details={details.county}
              onChange={onChange}
              id={"county"}
            />
            <FormInput
              name="Post/Zipcode"
              type="text"
              details={details.postcode}
              onChange={onChange}
              id={"postcode"}
            />
          </div>
          <FormInput
            name="Email"
            type="email"
            details={details.email}
            onChange={onChange}
            id={"email"}
          />
          <FormInput
            name="Number"
            type="tel"
            details={details.num}
            onChange={onChange}
            id={"num"}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PersonalInput;
