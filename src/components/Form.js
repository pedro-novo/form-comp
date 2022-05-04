import React from "react";
import { useClientContext } from "./context/ClientCreationContext";
import { useDispatch } from "react-redux";
import { addClient } from "../features/clients/clientsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Form = ({ children }) => {
	const { temporaryClientFields, temporaryClientFieldsSet } = useClientContext();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (temporaryClientFields.firstName && temporaryClientFields.lastName && temporaryClientFields.age && temporaryClientFields.hobbies) {
			console.log("ok");
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
