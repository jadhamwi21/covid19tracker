import React from "react";
import { LoaderElement } from "./Loader.sc";

type Props = {
	height: string;
	width: string;
	color: string;
};

const Loader = ({ height, width, color }: Props) => {
	return <LoaderElement height={height} width={width} color={color} />;
};

export default Loader;
