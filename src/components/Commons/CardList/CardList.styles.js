import styled from 'styled-components';
import { device } from '../../../index.styles';

export const BlockPeopleTask = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0px;
	margin-bottom: 20px;
	width: 300px;
	@media ${device.tablet} {
		justify-content: start;
		width: 660px;
		padding: 0px;
	};
	@media ${device.desktop} {
				width: 900px;
		margin-right: 0px;
		padding: 0px;
		margin-top: 0px;
	}
`;
