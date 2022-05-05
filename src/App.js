import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import CreateClient from "./components/CreateClient";

function App() {
	return (
		<main>
			<div className='w-screen h-[80px] z-10 bg-teal-300 fixed drop-shadow-lg'>
				<Navbar />
			</div>

			<div className='min-h-screen p-8 flex items-center justify-center'>
				<Routes>
					<Route exact path='/' element={<Clients />} />
					<Route exact path='/create' element={<CreateClient />} />
				</Routes>
			</div>
		</main>
	);
}

export default App;
