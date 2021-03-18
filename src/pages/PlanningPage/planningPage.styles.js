import styled from 'styled-components';
import device from './device';

const PlanningPageBlock = styled.div`
	margin: auto;
	margin-bottom: 60px;
	@media ${device.tablet} {
		margin-bottom: 0px;
		padding-bottom: 1px;
		background-color: #fafafa;
	}
	@media ${device.desktop} {
		padding-bottom: 0px;
	}
`;
const PlanningPageInfo = styled.div`
	margin-left: 40px;
	margin-right: 70px;
	display: flex;
	justify-content: space-between;
	@media ${device.mobile} {
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	@media ${device.tablet} {
		padding-bottom: 40px;
	}
	@media ${device.desktop} {
		margin: 0 auto;
		width: 1200px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-top: 48px;
	}
`;
export { PlanningPageBlock, PlanningPageInfo };
