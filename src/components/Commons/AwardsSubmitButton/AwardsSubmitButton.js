import React from 'react';
import { AwardsSubmitBtn } from './AwardsSubmitButton.styles';

const AwardsSubmitButton = ({ handleSwitch }) => (
	<AwardsSubmitBtn onClick={handleSwitch}>Подтвердить</AwardsSubmitBtn>
);

export default AwardsSubmitButton;
