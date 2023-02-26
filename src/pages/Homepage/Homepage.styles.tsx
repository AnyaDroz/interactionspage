import styled from "styled-components";

export const StyledGridContainer = styled.div`
	display: grid;
	grid-template-columns: 50% 8px 50%;
	grid-template-rows: auto;
	margin: 8px;
`;

export const StyledHeader = styled.div`
	display: flex;
	margin: 8px;
	font-family: "IBMPlexLight";
	text-transform: uppercase;
`;

export const StyledProjectContainer = styled.div`
	grid-column: 1 / 2;
	background-color: red;
	height: 500px;
`;
