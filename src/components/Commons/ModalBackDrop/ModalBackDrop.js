import React from 'react';
import { Screen } from './ModalBackDrop.styles';

const ModalBackDrop = ({ children }) => <Screen id="backdrop">{children}</Screen>;

export default ModalBackDrop;
