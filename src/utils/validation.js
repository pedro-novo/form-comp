export const validation = (clientObject) => {
	return Object.entries(clientObject)
		.map(([key, value]) => {
			if (value) {
				console.log("in");
				return key;
			}
		})
		.filter((item) => item !== undefined);
};
