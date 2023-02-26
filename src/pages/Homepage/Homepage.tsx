import React from "react";
import {
	StyledHeader,
	StyledGridContainer,
	StyledProjectContainer,
} from "./Homepage.styles";
import CircleTextContainer from "../../components/circle-component/CircleTextContainer/CircleTextContainer";

const Homepage = () => {
	return (
		<div>
			<StyledHeader>JSPlayground</StyledHeader>
			<StyledGridContainer>
				<StyledProjectContainer>
					<CircleTextContainer />
				</StyledProjectContainer>
			</StyledGridContainer>
		</div>
	);
};

export default Homepage;
