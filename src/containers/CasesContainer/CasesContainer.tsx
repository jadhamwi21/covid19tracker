import axios from "axios";
import React, { useEffect, useState } from "react";
import CaseCard from "../../components/CaseCard/CaseCard";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Transition from "../../components/Transition/Transition";
import { formatDate } from "../../helper/helper";
import { useAPI } from "../../hooks/useAPI";
import { CasesContainerElement } from "./CasesContainer.sc";

type GlobalCasesData = {
	confirmed: { value: number };
	recovered: { value: number };
	deaths: { value: number };
	lastUpdate: string;
};

const CasesContainer = () => {
	const { data, loading } = useAPI<GlobalCasesData>(
		"https://covid19.mathdro.id/api"
	);
	return (
		<Transition Key={loading}>
			<CasesContainerElement>
				{!loading ? (
					data !== null ? (
						<>
							<CaseCard
								cardSpec={{
									CardTitle: "Infected",
									NumberOfCases: data.confirmed.value,
									Footer: "Number Of Confirmed Cases Of Covid-19",
									Date: formatDate(data.lastUpdate),
								}}
							/>
							<CaseCard
								cardSpec={{
									CardTitle: "Deaths",
									NumberOfCases: data.deaths.value,
									Footer: "Number Of Deaths Caused By Covid-19",
									Date: formatDate(data.lastUpdate),
								}}
							/>
							<CaseCard
								cardSpec={{
									CardTitle: "Recovered",
									NumberOfCases: data.recovered.value,
									Footer: "Number Of Recovered Cases From Covid-19",
									Date: formatDate(data.lastUpdate),
								}}
							/>
						</>
					) : (
						<Error>Something Wrong Happened</Error>
					)
				) : (
					<Loader height={"120px"} width={"120px"} color={"var(--green)"} />
				)}
			</CasesContainerElement>
		</Transition>
	);
};

export default CasesContainer;
