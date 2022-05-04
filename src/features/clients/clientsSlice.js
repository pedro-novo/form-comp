import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = [
	{
		id: "dwwqddwq",
		firstName: "Pedro",
		lastName: "Teixeira",
		age: "28",
		hobbies: { codding: true, gaming: true },
	},
	{
		id: "dwqwqwqdqdqdfger",
		firstName: "Joao",
		lastName: "Novo",
		age: "22",
		hobbies: { reading: true, sports: true },
	},
];

const clientsSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
		addClient: (state, action) => {
			state.push(action.payload);
		},
	},
});

export default clientsSlice.reducer;
