import React, { useState, createContext, useContext } from "react";

const ClientContext = createContext({
	temporaryClientFields: {},
	temporaryClientFieldsSet: () => undefined,
	clientFieldsFound: [],
	clientFieldsFoundSet: () => undefined,
});

export const ClientCreationContextProvider = ({ children }) => {
	const [temporaryClientFields, temporaryClientFieldsSet] = useState({});
	const [clientFieldsFound, clientFieldsFoundSet] = useState([]);

	return <ClientContext.Provider value={{ temporaryClientFields, temporaryClientFieldsSet, clientFieldsFound, clientFieldsFoundSet }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
