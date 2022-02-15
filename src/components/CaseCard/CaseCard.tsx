import React from "react";
import {
	CaseCardDateElement,
	CaseCardDetailsFlexbox,
	CaseCardElement,
	CaseCardFooterElement,
	CaseCardTitleElement,
	NumberOfCasesElement,
} from "./CaseCard.sc";
import CountUp from "react-countup";

type CardSpec = {
	CardTitle: string;
	NumberOfCases: number;
	Date: string;
	Footer: string;
};

type Props = {
	cardSpec: CardSpec;
};

const CaseCard = ({ cardSpec }: Props) => {
	const { CardTitle, Footer, Date, NumberOfCases } = cardSpec;
	return (
		<CaseCardElement>
			<CaseCardTitleElement>{CardTitle}</CaseCardTitleElement>
			<CaseCardDetailsFlexbox>
				<NumberOfCasesElement>
					<CountUp start={0} end={NumberOfCases} duration={2.5} separator="," />
				</NumberOfCasesElement>
				<CaseCardDateElement>{Date}</CaseCardDateElement>
				<CaseCardFooterElement>{Footer}</CaseCardFooterElement>
			</CaseCardDetailsFlexbox>
		</CaseCardElement>
	);
};

export default CaseCard;
