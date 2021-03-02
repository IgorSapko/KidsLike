import styled from 'styled-components';

const PointsBlock = styled.div`
	
	display: flex;
	align-items: center;
`;

const TextLabel = styled.p`
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
	
`;

const PointsLabel = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	text-align: center;
	line-height: 30px;
	font-weight: bold;
	font-weight: 500;
	font-size: 14px;
	color: #ffffff;
	background-color: #8ec63f;
	margin: 0px 7px 0px 7px;
`;

export { PointsBlock, TextLabel, PointsLabel };
