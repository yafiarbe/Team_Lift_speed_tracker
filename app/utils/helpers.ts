export const calculateAverage = (values: number[]): number => {
	if (values.length === 0) return 0;
	return values.reduce((a, b) => a + b, 0) / values.length;
};

export const calculateMax = (values: number[]): number => {
	if (values.length === 0) return 0;
	return Math.max(...values);
};

export const calculateMin = (values: number[]): number => {
	if (values.length === 0) return 0;
	return Math.min(...values);
};

export const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateId = (): string => {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
