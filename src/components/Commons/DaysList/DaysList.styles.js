import styled from 'styled-components';

export const BlockCheckbox = styled.ul`
	padding: 0;
	margin: 0;
	bottom: 70px;
	right: -20px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 114px;
	height: auto;
	background: #3e7adc;
	border-radius: 6px;
	padding-top: 15px;
`;

export const BlockLabel = styled.li`
	list-style: none;
	margin-bottom: 7px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	color: #ffffff;
`;

export const BlockInput = styled.input`
	margin-right: 10px;
`;
