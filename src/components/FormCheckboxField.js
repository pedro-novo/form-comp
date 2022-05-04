import React from "react";
import { hobbies } from "../utils/hobbies";

const FormCheckboxField = ({ fieldName, placeholder, type, isNotFilled, errorMessage }) => {
	return (
		<select name={fieldName} id={fieldName}>
			{hobbies.map(({ id, value, name }) => (
				<option key={id} value={value}>
					{name}
				</option>
			))}
		</select>
	);
};

export default FormCheckboxField;
