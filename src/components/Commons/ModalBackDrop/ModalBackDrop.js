import React from 'react';
import { Screen } from "./ModalBackDrop.styles";
const ModalBackDrop = ({children}) => {
return(
    <Screen>
        {children}
    </Screen>
)
}

export default ModalBackDrop