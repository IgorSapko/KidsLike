//Core
import styled from 'styled-components';
//Settings
import { device } from '../../index.styles';
//Icons
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fafafa;
	font-family: 'Montserrat';
`;

export const MainText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 40px;

	@media ${device.tablet} {
		margin-top: 80px;
	}
`;

export const OurTeam = styled.p`
	font-weight: 600;
	font-size: 26px;
	line-height: 32px;

	@media ${device.tablet} {
		font-size: 30px;
		line-height: 37px;
	}
`;

export const AlwaysReady = styled.p`
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;

	@media ${device.tablet} {
		font-size: 18px;
		line-height: 22px;
	}
`;

export const CardWrapper = styled.ul`
	display: grid;
	max-width: 100vw;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-gap: 20px;
	margin: 40px auto 40px;
	padding: 0;
	list-style: none;

	@media ${device.tablet} {
		margin-bottom: 20px;
	}

	@media ${device.desktop} {
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

export const InfoWrapper = styled.div`
	margin: 10px 10px 0;
`;

export const Name = styled.p`
	font-size: 14px;
	line-height: 17px;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 6px;
`;

export const Qualification = styled.p`
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	color: #858598;
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
	transition: all 250ms linear;

	@media ${device.desktop} {
		&:hover {
			transform: scale(1.1);
		}
	}
`;

const size = () => ({ width: '100%', height: '100%' });

export const FacebookImg = styled(FaFacebookSquare)`
	${size};
	color: #395693;
`;

export const GitHubImg = styled(FaGithubSquare)`
	${size};
	color: #24292e;
`;

export const LinkedImg = styled(FaLinkedin)`
	${size};
	color: #007aaa;
`;
