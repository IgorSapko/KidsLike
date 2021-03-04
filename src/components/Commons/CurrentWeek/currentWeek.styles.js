import styled from 'styled-components';

import device from '../../../device';

const WeekBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 300px;
	/* @media ${device.tablet} {
		margin: auto;
	}
	@media ${device.tablet} {
		margin-bottom: 20px;
	} */
`;

const TextLabel = styled.span`
	font-weight: 500;
	font-size: 18px;
	color: #000000;
	padding-right: 10px;
`;
const WeekLabel = styled.span`
	font-weight: 700;
	font-size: 12px;
	color: #000000;
`;

export { WeekBlock, TextLabel, WeekLabel };