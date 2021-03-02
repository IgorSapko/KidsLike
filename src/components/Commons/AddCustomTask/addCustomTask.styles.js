import styled from 'styled-components';

const AddTaskBlock = styled.div`
	width: 400px;
	height: 54px;
	display: flex;
    align-items:center;
`;

const AddLabel = styled.p`
	font-weight: 500;
	font-size: 12px;
	color: #a6abb9;
    margin-right:20px;
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
`;

export  {AddLabel, AddTaskBlock, AddBtn}