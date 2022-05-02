import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import CreateClient from "./components/CreateClient";

function App() {
	return (
		<main>
			<Navbar />
			<div className='container mx-auto pt-40'>
				<Routes>
					<Route exact path='/' element={<Clients />} />
					<Route exact path='/create' element={<CreateClient />} />
				</Routes>
			</div>
		</main>
	);
}

export default App;
