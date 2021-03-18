import styled from 'styled-components';

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
		content: url('https://storage.googleapis.com/kidslikev2_bucket/d2a1c55ded2b1d42a3325525bb764ce3.svg');
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;

export const NotDoneTask = styled.span`
	&:after {
		content: url('https://storage.googleapis.com/kidslikev2_bucket/5525cf1cccaef1b97660266a33cc5b57.svg');
		width: 8px;
		height: 12px;
		margin-left: 6px;
	}
`;
