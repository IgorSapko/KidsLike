import styled from 'styled-components';
import doneTaskSvg from '../../../img/done.svg';
import notDoneTaskSvg from '../../../img/notDone.svg';

export const BlockPeopleTask_item_inform = styled.div`
/* position:relative; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 14px;
`;

export const BlockPeopleTask_item_text = styled.div`
position:relative;
	background: #ffbc33;
	padding: 0 10px;
	border-radius: 0px 0px 6px 6px;
`;

export const DoneTask = styled.span`
	&:after {
		content: url(${doneTaskSvg});
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;

export const NotDoneTask = styled.span`
	&:after {
		content: url(${notDoneTaskSvg});
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;
