import styled from 'styled-components';

export const BlockPeopleTask = styled.ul`
	max-width: 900px;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0;
	margin-top: 70px;
	@media (max-width: 768px) {
		max-width: 580px;
	}
	@media (max-width: 320px) {
		max-width: 280px;
	}
`;
