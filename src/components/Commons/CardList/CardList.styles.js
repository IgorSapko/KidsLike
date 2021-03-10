import styled from 'styled-components';
import {device} from '../../../index.styles'

export const BlockPeopleTask = styled.ul`
	max-width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 70px;
	@media (max-width: 768px) {
		max-width: 580px;
	}
	@media (max-width: 320px) {
		max-width: 280px;
	}
`;
