import styled from 'styled-components';
// import {device} from '../../../index.styles';
import device  from '../../../pages/PlanningPage/device';

const AddTaskBlock = styled.div`
	position: absolute;
	@media ${device.tablet} {
		position: static;
		width: 423px;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 40px;
	} ;
	@media ${device.tablet} {
		margin-bottom: 0px;
	}
`;

const AddLabel = styled.p`
	font-weight: 500;
	font-size: 12px;
	padding-right: 20px;
	color: #a6abb9;
	@media ${device.mobile} {
		display: none;
	}
	@media ${device.tablet} {
		display: block;
	}
`;

const AddBtn = styled.button`
	background-color: #ffff;
	border-radius: 27px;
	border: 0;
	cursor: pointer;
	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
	@media ${device.mobile} {
		position: fixed;
		margin-right:20px;
		margin-bottom: 3px;
		z-index: 110;
		bottom: 17px;
		right: 20px;
	}
	@media ${device.tablet} {
		position: inherit;
	}
`;

export { AddLabel, AddTaskBlock, AddBtn };
