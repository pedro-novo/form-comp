export const validation = (clientObject) => {
	return Object.entries(clientObject)
		.map(([key, value]) => {
			if (value) {
				return key;
			}
		})
		.filter((item) => item !== undefined);
};
