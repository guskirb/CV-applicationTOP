import FormInput from "./form";

function EducationInput () {
    return (
        <div className="sidebarSection sidebarEducation">
            <h1>Education</h1>
            <div className="nameCity">
            <FormInput name="School Name" type="text" />
            <FormInput name="Location" type="text" />
            </div>
            <div className="qualDate">
            <FormInput name="Qualification" type="text" />
            <FormInput name="Graduation Date" type="date" />
            </div>
        </div>
    )
}

export default EducationInput