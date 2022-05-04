import React, { useState, createContext, useContext } from "react";

const ClientContext = createContext({
	temporaryClientFields: {},
	temporaryClientFieldsSet: () => undefined,
	errorFields: [],
	errorFieldsSet: () => undefined,
});

export const ClientCreationContextProvider = ({ children }) => {
	const [temporaryClientFields, temporaryClientFieldsSet] = useState({});
	const [errorFields, errorFieldsSet] = useState([]);

	return <ClientContext.Provider value={{ temporaryClientFields, temporaryClientFieldsSet, errorFields, errorFieldsSet }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
