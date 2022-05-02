import React, { useState } from "react";

const FormField = ({ inputType }) => {
	const [error, setError] = useState(true);

	const inputFieldClass = `border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none"`;

	return (
		<input
			className='border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none'
			type={inputType}
			name='hello'
			placeholder='First Name'
		/>
	);
};

export default FormField;
