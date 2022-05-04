import React from "react";
import FormField from "./FormField";
import { formPropertiesNames } from "../utils/formPropertiesNames";
import FormCheckboxField from "./FormCheckboxField";
import { hobbies } from "../utils/hobbies";

const handleSubmit = () => {};

const Form = ({ children }) => {
	return (
		<form className='pt-40'>
			{children}
			<button type='button' className='btn' onSubmit={() => handleSubmit()}>
				Submit
			</button>
		</form>
	);
};

export default Form;
