//Core
import styled from 'styled-components';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MainText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Montserrat';
`;

export const OurTeam = styled.p`
	font-weight: 600;
	font-size: 26px;
	line-height: 32px;
`;

export const AlwaysReady = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
`;

export const CardWrapper = styled.ul`
	display: grid;
	max-width: 100vw;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-gap: 20px;
	margin: 40px auto 20px;
	padding: 0;
	list-style: none;

	@media (min-width: 768px) {
		/* margin-bottom: 40px; */
	}

	@media (min-width: 1280px) {
		margin-bottom: 60px;
	}
`;

export const Cards = styled.li`
	border-radius: 6px;
	overflow: hidden;
	box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
`;

export const Photo = styled.img`
	/* width: 280px; */
	/* height: 246px; */
`;

export const Name = styled.p`
	font-size: 14px;
	line-height: 17px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const Qualification = styled.p`
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	color: #858598;
	margin: 6px 0;
`;

export const Icons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 10px 0;
`;

export const IconWrapper = styled.a`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;

const size = () => ({ width: '100%', height: '100%' });

export const FacebookImg = styled(FaFacebookSquare)`
	${size};
	color: #395693;
`;

export const GitHubImg = styled(FaGithubSquare)`
	${size};
	color: #000;
`;

export const LinkedImg = styled(FaLinkedin)`
	${size};
	color: #007aaa;
`;
