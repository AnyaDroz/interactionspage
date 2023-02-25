import React from "react";
import { StyledLabel, StyledInput, StyledSwitch } from "./Toggle.styles";

const Toggle = ({ onToggleChange, checked }: any) => {
	return (
		<StyledLabel>
			<StyledInput
				checked={checked}
				onChange={onToggleChange}
				type="checkbox"
			/>
			<StyledSwitch />
		</StyledLabel>
	);
};

export default Toggle;
