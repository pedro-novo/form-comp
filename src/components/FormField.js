import React, { useState, useEffect } from "react";
import { useClientContext } from "./context/ClientCreationContext";

const FormField = ({ type, title, fieldName, checkboxFields }) => {
	const [selectedFields, selectedFieldsSet] = useState({});
	const { temporaryClientFields, temporaryClientFieldsSet } = useClientContext();

	const handleTextChange = (e) => {
		temporaryClientFieldsSet({ ...temporaryClientFields, [fieldName]: e.target.value });
	};

	const handleCheckboxChange = async (hobby) => {
		if (!selectedFields.hasOwnProperty(hobby)) {
			await selectedFieldsSet({ ...selectedFields, [hobby]: true });
		} else {
			await selectedFieldsSet({ ...selectedFields, [hobby]: !hobby });
		}
		temporaryClientFieldsSet({ ...temporaryClientFields, hobbies: selectedFields });
	};

	useEffect(() => {
		console.log(selectedFields);
	}, [selectedFields]);

	switch (type) {
		case "text":
			return (
				<div>
					<label htmlFor=''>{title}</label>
					<input className='ml-2 p-1 border-2 border-cyan-200 rounded-md bg-cyan-100 text-white' type='text' name={fieldName} placeholder={title} onChange={handleTextChange} />
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
				</div>
			);
		default:
			break;
	}
};

export default FormField;
