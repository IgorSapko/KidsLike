import styled from 'styled-components';
import { device } from '../../../index.styles';

// export const BlockPeopleTask = styled.ul`
// 	max-width: 1200px;
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	margin-top: 70px;
// 	@media (max-width: 1280px) {
// 		max-width: 600px;
// 	}
// 	@media (max-width: 768px) {
// 		max-width: 300px;
// 	}
// `;
export const BlockPeopleTask = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0px;
	margin-bottom: 20px;
	width: 300px;
	@media ${device.tablet} {
		justify-content: center;
		/* margin-left: 95px;
		margin-right: 95px; */
		width: 660px;
		// min-height: 61vh;
		padding: 0px;
		// margin-top: 40px;
	}
	@media ${device.desktop} {
		justify-content: start;
		width: 100%;
		margin-left: 110px;
		margin-right: 0px;
		padding: 0px;
		margin-top: 0px;
	}
`;
