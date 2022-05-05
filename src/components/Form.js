import React, { useEffect, useCallback } from "react";
import { useClientContext } from "./context/ClientCreationContext";
import { useDispatch } from "react-redux";
import { addClient } from "../features/clients/clientsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation";

const Form = ({ children }) => {
	const { temporaryClientFields, temporaryClientFieldsSet, clientFieldsFound, clientFieldsFoundSet } = useClientContext();
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

	useEffect(() => {
		console.log("clientFields: ", clientFieldsFound);
	}, [clientFieldsFound]);

	return (
		<form className='pt-40'>
			{children}
			<button type='button' className='btn' onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
};

export default Form;
