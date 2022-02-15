import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { CountryLabel, CountrySelectWrapper } from "./CountrySelect.sc";

type Props = {
	countries: string[];
	selectHandler: (val: string) => void;
};

const CountrySelect = ({ countries, selectHandler }: Props) => {
	return (
		<CountrySelectWrapper>
			<CountryLabel>Country</CountryLabel>
			<Select
				defaultValue="Global"
				style={{ width: 200 }}
				showSearch={true}
				showArrow={false}
				onSelect={selectHandler}
				dropdownStyle={{ scrollBehavior: "smooth" }}
			>
				<Option value="Global">Global</Option>
				{countries.map((country) => (
					<Option value={country}>{country}</Option>
				))}
			</Select>
		</CountrySelectWrapper>
	);
};

export default CountrySelect;
