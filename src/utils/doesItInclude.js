export const doesItInclude = (fieldName, fieldArray) => {
	if (!fieldArray.length) return true;

	return fieldArray.includes(fieldName);
};
