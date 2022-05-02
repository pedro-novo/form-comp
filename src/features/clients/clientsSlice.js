import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "1",
		firstName: "Pedro",
		lastName: "Teixeira",
		hobbies: ["codding", "gaming"],
	},
	{
		id: "2",
		firstName: "Joao",
		lastName: "Novo",
		hobbies: ["reading", "running"],
	},
];

const clientsSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {},
});

export default clientsSlice.reducer;
