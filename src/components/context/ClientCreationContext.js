import React, { useState, createContext, useContext } from "react";

const ClientContext = createContext({
	temporaryClientFields: {},
	temporaryClientFieldsSet: () => undefined,
	error: [],
	errorSet: () => undefined,
});

export const ClientCreationContextProvider = ({ children }) => {
	const [temporaryClientFields, temporaryClientFieldsSet] = useState({});
	const [error, errorSet] = useState([]);

	return <ClientContext.Provider value={{ temporaryClientFields, error, temporaryClientFieldsSet, errorSet }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
