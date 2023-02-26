import { useState } from "react";
import logo from "./logo.svg";
import CircleText from "../CircleText/CircleText";
import Toggle from "../Toggle/Toggle";
import {
	StyledControlPanel,
	StyledPageGrid,
	StyledInput,
	StyledSliderInput,
	StyledText,
} from "./CircleTextContainer.styles";
function CircleTextContainer() {
	const [text, setText] = useState("");
	const [value, setValue] = useState("50");
	const [color, setColor] = useState("");
	const [row, setRow] = useState(10);
	const [checked, setChecked] = useState(false);

	const handleChange = (event: any) => {
		setText(event.target.value);
	};

	const handleSlider = (event: any) => {
		setValue(event.target.value);
	};

	const onToggleChange = (event: any) => {
		setColor("#ffffff");
		if (checked === true) {
			setChecked(false);
		} else if (checked === false) {
			setChecked(true);
		}
	};

	return (
		<div>
			<StyledPageGrid color={checked ? "blue" : "black"}>
				{checked ? (
					<CircleText
						fontFamily="PowerGroteskItalic"
						fontFamilyBold="PowerGroteskHeavy"
						backgroundImageUrl=""
						text={text}
						fontSize={`${value}px`}
						color={color}
						numberOfRows={row}
					/>
				) : (
					<StyledText>{text}</StyledText>
				)}
				<StyledControlPanel>
					<StyledInput
						type="text"
						id="message"
						name="message"
						onChange={handleChange}
						value={text}
					/>
					<Toggle checked={checked} onToggleChange={onToggleChange} />

					<StyledSliderInput
						onChange={handleSlider}
						type="range"
						min="90"
						max="150"
					/>
				</StyledControlPanel>
			</StyledPageGrid>
		</div>
	);
}

export default CircleTextContainer;
