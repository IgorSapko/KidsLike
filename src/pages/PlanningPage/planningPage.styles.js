import styled from 'styled-components';
// import {device, size} from '../../index.styles';
// import device from '../../device';

import device from './device';

const PlanningPageBlock = styled.div`
	margin: auto;
	/* display:flex; */
	/* flex-wrap:wrap; */
	@media ${device.mobile} {
		margin-bottom: 60px;
	}
	@media ${device.tablet} {
		margin-bottom: inferit;
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
	@media ${device.desktop} {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
export { PlanningPageBlock, PlanningPageInfo };

// import styled from 'styled-components';
// import {device} from '../../index.styles';

// const PlanningPageBlock = styled.div`
// 	margin: auto;
	
// 	@media ${device.mobile} {
// 		margin-bottom: 60px;
// 	}
// 	@media ${device.tablet} {
// 		margin-bottom: inferit;
// 	}
// `;
// const PlanningPageInfo = styled.div`
// 	margin-left: 40px;
// 	margin-right: 70px;
// 	display: block;
// 	justify-content: space-between;
// 	@media ${device.mobile} {
// 		/* max-width:768px; */
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: space-around;
// 	}
// 	@media ${device.desktop} {
// 		flex-direction: row;
// 		align-items: center;
// 		justify-content: space-between;
// 	}
// `;
// export {PlanningPageBlock, PlanningPageInfo}