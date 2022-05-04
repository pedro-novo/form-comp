import React, { useState, useEffect } from "react";
import { useClientContext } from "./context/ClientCreationContext";

const FormField = ({ type, title, fieldName, checkboxFields }) => {
	const { temporaryClientFields, temporaryClientFieldsSet, errorFields } = useClientContext();

	const handleTextChange = (e) => {
		return temporaryClientFieldsSet({ ...temporaryClientFields, [fieldName]: e.target.value });
	};

	const handleCheckboxChange = (hobby) => {
		if (temporaryClientFields.hasOwnProperty("hobbies")) {
			if (!temporaryClientFields.hobbies.includes(hobby)) {
				return temporaryClientFieldsSet({ ...temporaryClientFields, hobbies: [...temporaryClientFields.hobbies, hobby] });
			}
			return temporaryClientFieldsSet(temporaryClientFields.hobbies.filter((hob) => hob !== hobby));
		}
		temporaryClientFieldsSet({ ...temporaryClientFields, hobbies: [hobby] });
	};

	switch (type) {
		case "text":
			return (
				<div>
					<label htmlFor=''>{title}</label>
					<input className='ml-2 p-1 textInput' type='text' name={fieldName} placeholder={title} onChange={handleTextChange} />
					<h4>You must enter the {title}</h4>
				</div>
			);
		case "checkbox":
			return (
				<div>
					<label htmlFor=''>{title}</label>
					{checkboxFields.map((field) => (
						<div key={field}>
							<input
								className='ml-2 p-1 border-2 border-cyan-200 rounded-md bg-cyan-100 text-white'
								type='checkbox'
								name={field}
								onClick={() => {
									handleCheckboxChange(field);
								}}
							/>
							{field}
						</div>
					))}
					<h4>You must enter the {title}</h4>
				</div>
			);
		default:
			break;
	}
};

export default FormField;
