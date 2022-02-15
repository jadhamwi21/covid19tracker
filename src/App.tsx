import React from "react";
import CasesContainer from "./containers/CasesContainer/CasesContainer";
import ChartsContainer from "./containers/ChartsContainer/ChartsContainer";
import AppLayout from "./layouts/AppLayout/AppLayout";
import "antd/dist/antd.css";

function App() {
	return (
		<AppLayout>
			<CasesContainer />
			<ChartsContainer />
		</AppLayout>
	);
}

export default App;
