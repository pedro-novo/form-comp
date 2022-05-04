import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: "dwwqddwq",
		firstName: "Pedro",
		lastName: "Teixeira",
		age: "28",
		hobbies: ["codding", "gaming"],
	},
	{
		id: "dwqwqwqdqdqdfger",
		firstName: "Joao",
		lastName: "Novo",
		age: "22",
		hobbies: ["reading", "sports"],
	},
];

const clientsSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
		addClient(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addClient } = clientsSlice.actions;

export default clientsSlice.reducer;
