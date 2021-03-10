import styled from 'styled-components';
import {device} from '../../index.styles'

export const BlockPeopleTask_Awards = styled.ul`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	@media (max-width: 768px) {
		max-width: 580px;
	}
	@media ${device.mobile} {
		max-width: 280px;
		/* margin-right:0px */
	}
`;