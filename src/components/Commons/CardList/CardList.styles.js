import styled from 'styled-components';
import {device} from '../../../index.styles'

export const BlockPeopleTask = styled.ul`
	max-width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 70px;
	@media (max-width: 1280px) {
		max-width: 600px;
	}
	@media (max-width: 768px) {
		max-width: 300px;
	}
`;
