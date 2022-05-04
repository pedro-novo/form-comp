import React from "react";
import { useClientContext } from "./context/ClientCreationContext";
import { useDispatch } from "react-redux";
import { addClient } from "../features/clients/clientsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Form = ({ children }) => {
	const { temporaryClientFields, error, temporaryClientFieldsSet, errorSet } = useClientContext();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const validation = () => {
		let errorArray = [];
		Object.entries(temporaryClientFields).map(([key, value]) => {
			errorArray.push(key);
		});
		return errorArray;
	};

	const handleSubmit = () => {
		errorSet([]);
		const isError = validation();
		error.push(isError);
		console.log(isError);
		console.log(error);
		if (isError.length === 4) {
			dispatch(addClient({ ...temporaryClientFields, id: nanoid() }));
			temporaryClientFieldsSet({});
			navigate("/");
		}
	};

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
