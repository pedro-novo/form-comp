import React, { useEffect, useState } from "react";
import Form from "./Form";
import FormField from "./FormField";

const CreateClient = () => {
	return (
		<Form>
			<h1 className='text-xs uppercase text-zinc-900 font-extrabold'>Personal Information</h1>
			<FormField type='text' title='First Name' fieldName='firstName' colSpan={"1"} />
			<FormField type='text' title='Last Name' fieldName='lastName' colSpan={"1"} />
			<FormField type='text' title='Age' fieldName='age' colSpan={"1"} />
			<FormField type='checkbox' title='Hobbies' fieldName='hobbies' checkboxFields={["sports", "reading", "codding"]} colSpan={"2"} />
		</Form>
	);
};

export default CreateClient;
