import { CountryDataType, DailyDataType } from "../../types/types";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

type Props = {
	dailyData: DailyDataType | null;
	countryData: CountryDataType | null;
};

const Chart = ({ dailyData, countryData }: Props) => {
	console.log(dailyData);
	const LineChart =
		dailyData !== null ? (
			<Line
				style={{ color: "white" }}
				data={{
					labels: dailyData.map(({ reportDate }) => reportDate),

					datasets: [
						{
							data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
							label: "Infected",
							backgroundColor: "#00cb52",
						},
						{
							data: dailyData.map(({ deaths }) => deaths.total),
							label: "Deaths",
							backgroundColor: "red",
						},
						{
							data: dailyData.map(({ totalRecovered }) => totalRecovered),
							label: "Recovered",
							backgroundColor: "#e2e2e2",
						},
					],
				}}
				fallbackContent={"ERROR"}
			/>
		) : null;
	const BarChart =
		countryData !== null ? (
			<Bar
				data={{
					labels: ["Infected", "Recovered", "Deaths"],
					datasets: [
						{
							label: "People",
							backgroundColor: ["#00cb52", "red", "#e2e2e2"],
							data: [
								countryData.confirmed.value,
								countryData.recovered.value,
								countryData.deaths.value,
							],
						},
					],
				}}
			/>
		) : null;
	return (
		<>
			{LineChart}
			{BarChart}
		</>
	);
};

export default Chart;
