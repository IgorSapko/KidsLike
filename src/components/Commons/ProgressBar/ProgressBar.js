import ProgressBar from '@ramonak/react-progress-bar';
import { ProgressDiv } from './ProgressBar.styles';

export default function ProgressBarComponent({ progress, weekPoints, plan }) {
	return (
		<ProgressDiv>
			<ProgressBar
				completed={progress(weekPoints, plan)}
				bgcolor="#9ECB44"
				width="280px"
				height="6px"
				borderRadius="10px"
				labelSize="0"
			/>
		</ProgressDiv>
	);
}
