import React from "react";
import Form from "./Form";
import FormField from "./FormField";

const CreateClient = () => {
	return (
		<Form>
			<h1 className='text-xs uppercase text-zinc-900 font-extrabold'>Personal Information</h1>
			<FormField type='text' title='First Name' fieldName='firstName' />
			<FormField type='text' title='Last Name' fieldName='lastName' />
			<FormField type='text' title='Age' fieldName='age' />
			<FormField type='checkbox' title='Hobbies' fieldName='hobbies' checkboxFields={["sports", "reading", "codding"]} />
		</Form>
	);
};

export default CreateClient;
