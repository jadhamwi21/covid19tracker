import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "../../components/Chart/Chart";
import CountrySelect from "../../components/CountrySelect/CountrySelect";
import { useAPI } from "../../hooks/useAPI";
import { CountryDataType, DailyDataType } from "../../types/types";
import { ChartsContainerElement } from "./ChartsContainer.sc";

type Props = {};

const ChartsContainer = (props: Props) => {
	const { data } = useAPI<{ countries: { name: string }[] }>(
		"https://covid19.mathdro.id/api/countries"
	);
	const [selectedCountry, setSelectedCountry] = useState("Global");
	const [fetchedData, setFetchedData] = useState<{
		dailyData: DailyDataType | null;
		countryData: CountryDataType | null;
	}>({ dailyData: null, countryData: null });
	useEffect(() => {
		if (selectedCountry === "Global") {
			axios.get("https://covid19.mathdro.id/api/daily").then((res) => {
				const { data } = res;
				setFetchedData({ dailyData: data, countryData: null });
			});
		} else {
			axios
				.get(`https://covid19.mathdro.id/api/countries/${selectedCountry}`)
				.then((res) => {
					const { data } = res;
					setFetchedData({ countryData: data, dailyData: null });
				});
		}
	}, [selectedCountry]);
	return (
		data && (
			<ChartsContainerElement>
				<CountrySelect
					countries={data.countries.map((country) => country.name)}
					selectHandler={(val: string) => setSelectedCountry(val)}
				/>
				<Chart
					dailyData={fetchedData.dailyData}
					countryData={fetchedData.countryData}
				/>
			</ChartsContainerElement>
		)
	);
};

export default ChartsContainer;
