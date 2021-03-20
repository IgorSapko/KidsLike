import styled from 'styled-components';
import { device } from '../../../index.styles';

const WeekBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 170px;
	@media ${device.tablet} {
		flex-direction: initial;
		width: fit-content;
		margin-top: 40px;
		margin-bottom: 18px;
	};
	@media ${device.desktop} {
		margin: 0px;
	}
`;

const TextLabel = styled.span`
	display: flex;
	font-family: Montserrat;
	font-weight: 500;
	font-size: 18px;
	color: #000000;
	padding-right: 10px;
	@media ${device.tablet} {
		display: inline-block;
	};
	@media ${device.desktop} {
		display: inline-block;
		width: max-content;
	}
`;
const WeekLabel = styled.span`
	display: flex;
	margin-top: 10px;
	margin-bottom: 30px;
	width: 165px;
	height: 30px;
	justify-content: center;
	align-items: center;
	font-family: Montserrat;
	font-weight: 700;
	font-size: 12px;
	color: #000000;
	border: 1px solid #ffbc33;
	box-sizing: border-box;
	border-radius: 6px;
	@media ${device.tablet} {
		margin-top: 0px;
		margin-bottom: 0px;
	}
	@media ${device.desktop} {
		border: none;
	}
`;

export { WeekBlock, TextLabel, WeekLabel };
