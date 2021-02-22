import React, { useState } from 'react';
//switch togle
import Switch from 'react-switch';
//style
import { UncheckedIconWrapper, CheckedIconWrapper } from './TaskToggle.styles';
//svg
import { Unchecked, Checked } from './SvgIconSwitch';

export default function TaskToggle({ summNumber, item }) {
	const [checked, setChecked] = useState(false);
	return (
		<div onClick={() => summNumber(item.ball, checked)}>
			<Switch
				handleDiameter={14}
				onColor="#008000"
				offColor="#ff0000"
				checked={checked}
				onChange={() => setChecked(!checked)}
				height={18}
				width={40}
				uncheckedIcon={
					<UncheckedIconWrapper>
						<Unchecked />
					</UncheckedIconWrapper>
				}
				checkedIcon={
					<CheckedIconWrapper>
						<Checked />
					</CheckedIconWrapper>
				}
			/>
		</div>
	);
}
