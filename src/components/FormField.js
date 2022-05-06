import React, { useEffect } from "react";
import { useClientContext } from "./context/ClientCreationContext";
import { doesItInclude } from "../utils/doesItInclude";

const FormField = ({ type, title, fieldName, checkboxFields, colSpan }) => {
	const { temporaryClientFields, temporaryClientFieldsSet, clientFieldsFound, clientFieldsFoundSet } = useClientContext();

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
		return temporaryClientFieldsSet({ ...temporaryClientFields, hobbies: [hobby] });
	};

	useEffect(() => {
		clientFieldsFoundSet([]);
		temporaryClientFieldsSet({});
	}, []);

	switch (type) {
		case "text":
			return (
				<div className={doesItInclude(fieldName, clientFieldsFound) ? "textInput" : "textInputError"}>
					<label className='block text-sm font-semibold'>{title}</label>
					<input className='bg-transparent focus:outline-none' type='text' name={fieldName} placeholder={title} onChange={handleTextChange} />
					<h4 className={doesItInclude(fieldName, clientFieldsFound) ? "hidden" : "errorTextDisplay"}>You must enter the {title}</h4>
				</div>
			);
		case "checkbox":
			return (
				<div className={doesItInclude(fieldName, clientFieldsFound) ? "selectInput" : "selectInputError"}>
					<label className='block text-sm font-semibold'>{title}:</label>
					{checkboxFields.map((field) => (
						<div key={field}>
							<input
								className='ml-2 mr-2 p-1 border-2 border-cyan-200 rounded-md bg-cyan-100 text-white'
								type='checkbox'
								name={field}
								onClick={() => {
									handleCheckboxChange(field);
								}}
							/>
							{field}
						</div>
					))}
					<h4 className={doesItInclude(fieldName, clientFieldsFound) ? "hidden" : "errorTextDisplay"}>You must enter the {title}</h4>
				</div>
			);
		default:
			break;
	}
};

export default FormField;
