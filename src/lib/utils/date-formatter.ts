export function formatDate(inputDate: string): string {
	const date = new Date(inputDate);

	// Ensure the date is interpreted as UTC
	date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

	const months: string[] = [
		'JAN',
		'FEB',
		'MAR',
		'APR',
		'MAY',
		'JUN',
		'JUL',
		'AUG',
		'SEP',
		'OCT',
		'NOV',
		'DEC'
	];
	const month: string = months[date.getUTCMonth()];
	const day: string = date.getUTCDate().toString().padStart(2, '0');
	const year: number = date.getUTCFullYear();

	let hours: number = date.getUTCHours();
	const ampm: string = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // Convert 0 to 12

	return `${month} ${day}, ${year} ${hours}${ampm} UTC`;
}
