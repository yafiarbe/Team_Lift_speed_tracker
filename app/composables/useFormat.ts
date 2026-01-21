export const useFormat = () => {
	const formatSpeed = (speed: number): string => {
		return `${speed.toFixed(2)} km/h`;
	};

	const formatDate = (date: Date): string => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};

	const formatTime = (seconds: number): string => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;

		if (hours > 0) {
			return `${hours}h ${minutes}m ${secs}s`;
		}
		if (minutes > 0) {
			return `${minutes}m ${secs}s`;
		}
		return `${secs}s`;
	};

	return {
		formatSpeed,
		formatDate,
		formatTime,
	};
};
