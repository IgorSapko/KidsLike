// import styled from 'styled-components';
// const Screen = styled.div`
// 	height: 100%;
// 	width: 100%;
// 	background-color: rgba(0, 0, 0, 0.4);
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	transform: scale(1);
// 	/* pointer-events:none; */
// 	opacity: 1 ;
// 	z-index: 500;
// 	/* transition: all 0.5s; */
// `;

// const ModalBlock = styled.div`
// 	width: 280px;
// 	height: 300px;
//     margin-left:40px;
// 	display: flex;
// 	flex-direction: column;
// 	box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
// 	border-radius: 6px;
// `;

// const Image = styled.img`
// 	border-radius: 6px 6px 0px 0px;
// 	max-height: 100%;
// 	max-width:100%;
// 	margin: auto;
// 	background-color: #ffff;
// `;
// const Header = styled.div`
// 	width: 280px;
// 	height: 133px;
//     display:flex;
//     align-items: center;
//     justify-content:center;
// 	border-radius: 6px 6px 0px 0px;
// 	background-color: #ffff;
// `;
// const Form = styled.form`
// 	width: 280px;
// 	height: 167px;
// 	border-radius: 0px 0px 6px 6px;
// 	background-color: #ffbc33;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
//     justify-content:center;
// `;
// const LabelDiv = styled.label`
// 	width: 224px;
// 	height: 24px;
//     margin: 5px 0 5px 0;
// 	display: flex;
// 	flex-direction: row;
// 	border-bottom: 1px solid #ffff;
// 	justify-content: flex-start;
//     align-items:center;
// `;
// const TextInput = styled.input`
    
// 	background-color: inherit;
//     padding-left:10px;	
//     color: #ffff;
// 	border: none;
// 		::placeholder {
// 		color: #ffff;
		
// 		font-style: italic;
//         padding-left:1px;
// 	}
// 	:active,
// 	:hover,
// 	:focus {
// 		outline: 0;
// 		outline-offset: 0;
// 	}
// `;
// const FileInputBlock = styled.label`
// 	cursor: pointer;
// 	position: relative;
// 	top: -40px;
//     left: 123px;
// `;
// const FileInput = styled.input`
// 	    width: 0px;
//         height:0px;
// 		outline: 0;
// 		opacity: 0;
// 		pointer-events: none;
// 		user-select: none;
	
// `;

// const Button = styled.button`
// 	font-weight: 700;
// 	background-color: #ffff;
// 	border-radius: 4px;
// 	border: 0;
// 	margin-top: 15px;
// 	cursor: pointer;
// 	width: 60px;
// 	height: 30px;
// 	:active,
// 	:hover,
// 	:focus {
// 		outline: 0;
// 		outline-offset: 0;
// 	}
// `;
// const CloseBtn = styled.button`
// 	background-color: #ffff;
// 	border: 0;
// 	cursor: pointer;
// 	width: 16px;
// 	height: 16px;
// 	cursor: pointer;
// 	position: relative;
// 	top: -50px;
// 	left: -13px;
// 	:active,
// 	:hover,
// 	:focus {
// 		outline: 0;
// 		outline-offset: 0;
// 	}
// `;
// const NotificationDiv = styled.div`
// 	position: absolute;
// 	top: 47vh;
// 	left: 45vw;
// 	color: red;
// 	font-family: 'MontserratRegular';
// 	font-style: normal;
// 	font-weight: normal;
// 	font-size: 10px;
// 	line-height: 12px;
// 	letter-spacing: 0.04em;
// `;




// export {
// 	Screen,
// 	ModalBlock,
// 	Header,
// 	Image,
// 	Form,
// 	LabelDiv,
// 	TextInput,
// 	FileInputBlock,
// 	FileInput,
// 	Button,
// 	CloseBtn,
// 	NotificationDiv,
// };


import styled from 'styled-components';


const ModalBlock = styled.div`
position:absolute;
	width: 280px;
	height: 300px;
    margin-left:40px;
	display: flex;
	flex-direction: column;
	box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	/* z-index:10000; */
`;

const Image = styled.img`
	border-radius: 6px 6px 0px 0px;
	max-height: 100%;
	max-width:100%;
	margin: auto;
	background-color: #ffff;
`;
const Header = styled.div`
	width: 280px;
	height: 133px;
    display:flex;
    align-items: center;
    justify-content:center;
	border-radius: 6px 6px 0px 0px;
	background-color: #ffff;
`;
const Form = styled.form`
	width: 280px;
	height: 167px;
	border-radius: 0px 0px 6px 6px;
	background-color: #ffbc33;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content:center;
`;
const LabelDiv = styled.label`
	width: 224px;
	height: 24px;
    margin: 5px 0 5px 0;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #ffff;
	justify-content: flex-start;
    align-items:center;
`;
const TextInput = styled.input`
    
	background-color: inherit;
    padding-left:10px;	
    color: #ffff;
	border: none;
		::placeholder {
		color: #ffff;
		
		font-style: italic;
        padding-left:1px;
	}
	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
`;
const FileInputBlock = styled.label`
	cursor: pointer;
	position: relative;
	top: -40px;
    left: 123px;
`;
const FileInput = styled.input`
	    width: 0px;
        height:0px;
		outline: 0;
		opacity: 0;
		pointer-events: none;
		user-select: none;
	
`;

const Button = styled.button`
	font-weight: 700;
	background-color: #ffff;
	border-radius: 4px;
	border: 0;
	margin-top: 15px;
	cursor: pointer;
	width: 60px;
	height: 30px;
	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
`;
const CloseBtn = styled.button`
	background-color: #ffff;
	border: 0;
	cursor: pointer;
	width: 16px;
	height: 16px;
	cursor: pointer;
	position: relative;
	top: -50px;
	left: -13px;
	:active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
`;
const NotificationDiv = styled.div`
	position: absolute;
	top: 47vh;
	left: 45vw;
	color: red;
	font-family: 'MontserratRegular';
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.04em;
`;

export {
	ModalBlock,
	Header,
	Image,
	Form,
	LabelDiv,
	TextInput,
	FileInputBlock,
	FileInput,
	Button,
	CloseBtn,
	NotificationDiv,
};
