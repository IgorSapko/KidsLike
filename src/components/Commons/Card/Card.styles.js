import styled from 'styled-components';
import {device} from 'index.styles';
export const BlockPeopleTaskItem = styled.li`

	max-width: 280px;
	
	position: relative;
	list-style: none;
	filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
	
	&:not(:last-child){
		margin-right:0px;
		margin-bottom: 20px;
	};
	@media ${device.tablet}{
		&:not(:last-child){
		margin-right:20px;
		margin-bottom: 20px;
		}}
`
