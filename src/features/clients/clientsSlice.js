import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		Name: "Pedro Novo",
		hobbies: ["codding", "gaming"],
	},
	{
		id: "2",
		Name: "Joao Novo",
		hobbies: ["reading", "running"],
	},
];

const clientsSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {},
});

export default clientsSlice.reducer;
