export type DailyDataType = {
	totalConfirmed: number;
	reportDate: string;
	totalRecovered: number;
	deaths: { total: number };
}[];

export interface Case {
	value: number;
}
export type CountryDataType = {
	confirmed: Case;
	recovered: Case;
	deaths: Case;
};
