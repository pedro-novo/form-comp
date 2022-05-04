import React, { useState, createContext, useContext } from "react";

const ClientContext = createContext({
	temporaryClientFields: {},
	temporaryClientFieldsSet: () => undefined,
});

export const ClientCreationContextProvider = ({ children }) => {
	const [temporaryClientFields, temporaryClientFieldsSet] = useState({});

	return <ClientContext.Provider value={{ temporaryClientFields, temporaryClientFieldsSet }}>{children}</ClientContext.Provider>;
};

export const useClientContext = () => useContext(ClientContext);
