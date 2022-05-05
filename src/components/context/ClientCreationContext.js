import React, { useState, createContext, useContext } from "react";

const ClientContext = createContext({
	temporaryClientFields: {},
	temporaryClientFieldsSet: () => undefined,
	clientFieldsFound: [],
	clientFieldsFoundSet: () => undefined,
	clientErrorsFieldFound: {},
	clientErrorsFieldFoundSet: () => undefined,
});

export const ClientCreationContextProvider = ({ children }) => {
	const [temporaryClientFields, temporaryClientFieldsSet] = useState({});
	const [clientFieldsFound, clientFieldsFoundSet] = useState([]);
	const [clientErrorsFieldFound, clientErrorsFieldFoundSet] = useState({
		fields: [],
		error: false,
	});

	return <ClientContext.Provider value={{ temporaryClientFields, temporaryClientFieldsSet, clientFieldsFound, clientFieldsFoundSet, clientErrorsFieldFound, clientErrorsFieldFoundSet }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
