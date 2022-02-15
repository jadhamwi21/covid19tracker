import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { ChildrenContainer } from "./AppLayout.sc";

type Props = {
	children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<ChildrenContainer>{children}</ChildrenContainer>
		</>
	);
};

export default AppLayout;
