const dateOptions: any = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
};

export function formatDate(date: string) {
	return new Date(date)
		.toLocaleDateString("en-US", dateOptions)
		.split(",")
		.join(" ");
}

export function titleize(str: string) {
	return str[0].toUpperCase() + str.slice(1);
}
