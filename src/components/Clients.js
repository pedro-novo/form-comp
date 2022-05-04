import React from "react";
import { useSelector } from "react-redux";

const Clients = () => {
	const clients = useSelector((store) => store.clients);

	return (
		<div>
			<h1 className='text-center text-lg'>Clients List:</h1>
			{clients.map((client) => (
				<div key={client.id} className='mt-6 ml-2'>
					<h1>
						<span className='mt-2 text-cyan-600 text-lg font-semibold'>First Name:</span> {client.firstName}
					</h1>
					<h4>
						<span className='mt-2 text-cyan-600 text-lg font-semibold'>Last Name:</span> {client.lastName}
					</h4>
					<span className='mt-2 text-cyan-600 text-lg font-semibold'>Hobbies:</span>
					{client.hobbies.map((hobby) => (
						<p key={hobby}>{hobby}</p>
					))}
				</div>
			))}
		</div>
	);
};

export default Clients;
