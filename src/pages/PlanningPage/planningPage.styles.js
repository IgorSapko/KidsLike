import styled from 'styled-components';
<<<<<<< HEAD
// import {device, size} from '../../index.styles';
// import device from '../../device';

=======
>>>>>>> dev
import device from './device';

const PlanningPageBlock = styled.div`
	margin: auto;
<<<<<<< HEAD
	/* display:flex; */
	/* flex-wrap:wrap; */
	@media ${device.mobile} {
		margin-bottom: 60px;
	}
=======
	margin-bottom: 60px;
>>>>>>> dev
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
<<<<<<< HEAD

=======
>>>>>>> dev
	justify-content: space-between;
	@media ${device.mobile} {
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
<<<<<<< HEAD
=======
	}
	@media ${device.tablet} {
		padding-bottom: 40px;
>>>>>>> dev
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
<<<<<<< HEAD
export { PlanningPageBlock, PlanningPageInfo };
=======
export { PlanningPageBlock, PlanningPageInfo };
>>>>>>> dev
