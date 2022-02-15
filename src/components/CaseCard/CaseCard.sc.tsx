import styled from "styled-components";

export const CaseCardElement = styled.div`
	height: fit-content;
	padding: 1em;
	width: 30%;
	background-color: var(--gray);
	border-radius: 6px;
	@media (max-width: 768px) {
		width: 100%;
		margin: 1em 0px;
	}
`;

export const CaseCardTitleElement = styled.div`
	width: 100%;
	height: fit-content;
	text-align: center;
	color: var(--black);
	font-size: 20px;
`;

export const CaseCardDetailsFlexbox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 1em 2em;
	& > div {
		margin: 0.5em 0px;
		font-size: 18px;
		font-weight: 500;
	}
`;

export const NumberOfCasesElement = styled.div`
	color: var(--green);
`;

export const CaseCardDateElement = styled.div`
	color: var(--black);
`;

export const CaseCardFooterElement = styled.div`
	color: var(--green);
`;
