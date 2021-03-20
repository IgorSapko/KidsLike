import styled, { css } from 'styled-components';
import { device } from '../../../index.styles';

export const BlockPeopleTask = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	padding: 0px;
	margin-bottom: 50px;
	width: 300px;
	@media ${device.tablet} {
		justify-content: start;
		width: 600px;
		padding: 0px;
		${props =>
			props.locat === '/planning' &&
			css`
				margin-bottom: 60px;
			`}
	}
	@media ${device.desktop} {
		width: 900px;
		margin-right: 0px;
		margin: 0 auto;
		padding: 0px;
		margin-top: 0px;
		${props =>
			props.locat === '/planning' &&
			css`
				margin: 0 auto;
				margin-top: 26px;
				width: 1200px;
			`}
	}
`;
