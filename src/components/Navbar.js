import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
			<div className='px-2 flex justify-between items-center w-full h-full'>
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>LOGO</h1>
				</div>
				<Link to='/create'>
					<button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Create a Form</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
