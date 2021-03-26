import styled from 'styled-components';

export const HeaderBlock = styled.div`
	position: relative;
	max-width: 100%;
	display: flex;
	align-items: center;
	height: 62px;
	justify-content: space-evenly;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const LeftSideWrapper = styled.div`
	display: flex;
	align-items: center;
`;
export const HeaderBalance = styled.div`
	display: flex;
	align-items: center;
	margin-left: 42px;
`;
export const HeaderBalanceText = styled.h3`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.04em;

	color: #a6abb9;
	margin-right: 10px;
`;

export const HeaderBalanceNumber = styled.span`
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	align-items: center;
	letter-spacing: 0.04em;
	color: #000000;
`;
