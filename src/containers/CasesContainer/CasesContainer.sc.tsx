import styled from "styled-components";

export const CasesContainerElement = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 50vh;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		height: fit-content;
	}
`;
