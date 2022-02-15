import React from "react";
import { ErrorElement } from "./Error.sc";

type Props = { children: string };

const Error = ({ children }: Props) => {
	return <ErrorElement>{children}</ErrorElement>;
};

export default Error;
