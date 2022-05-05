export const validation = (clientObject) => {
	return Object.entries(clientObject).map(([key, value]) => key);
};
