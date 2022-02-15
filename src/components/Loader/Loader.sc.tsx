import styled, { keyframes } from "styled-components";

const Spin = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;

export const LoaderElement = styled.div<{
	height: string;
	width: string;
	color: string;
}>`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: 50%;
	border: solid 3px ${(props) => props.color};
	border-bottom-color: transparent;
	animation-name: ${Spin};
	animation-duration: 1s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`;
