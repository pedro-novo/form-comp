import React, { useCallback } from "react";
import { useClientContext } from "./context/ClientCreationContext";
import { useDispatch } from "react-redux";
import { addClient } from "../features/clients/clientsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";

const Form = ({ children }) => {
	const { temporaryClientFields, temporaryClientFieldsSet, clientFieldsFoundSet } = useClientContext();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = useCallback(() => {
		const fulffilledFields = validation(temporaryClientFields);

		if (fulffilledFields.length === 4) {
			dispatch(addClient({ ...temporaryClientFields, id: nanoid() }));
			temporaryClientFieldsSet({});
			navigate("/");
		}
		clientFieldsFoundSet(fulffilledFields);
	});

	return (
		<div className='w-1/3 p-6 bg-gray-200 rounded-lg shadow-lg'>
			<h1 className='mt-2 text-center uppercase text-teal-600 text-4xl font-extrabold tracking-wider'>Client Form</h1>
			<p className='mt-2 text-center text-gray-500 text-lg font-semibold'>Fill in all fields berfore Submitting.</p>

			<form className='mt-6'>
				<div className='flex flex-col'>
					{children}
					<button type='button' className='btn' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
