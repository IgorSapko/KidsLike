//Core
import { createGlobalStyle } from 'styled-components';

import Montserrat300 from './fonts/montserrat-v15-latin-300.woff';
import Montserrat300_2 from './fonts/montserrat-v15-latin-300.woff2';
import Montserrat600 from './fonts/montserrat-v15-latin-600.woff';
import Montserrat600_2 from './fonts/montserrat-v15-latin-600.woff2';
import Montserrat800 from './fonts/montserrat-v15-latin-800.woff';
import Montserrat800_2 from './fonts/montserrat-v15-latin-800.woff2';
import MontserratRegular from './fonts/montserrat-v15-latin-regular.woff';
import MontserratRegular_2 from './fonts/montserrat-v15-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }

    body {
        width: 100%;
    }

    input {
        &::placeholder {
            font: inherit;
            color: #b8bfc4;
        }

        &::-webkit-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &::-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-moz-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:-ms-input-placeholder {
            opacity: 1;
            transition: opacity 0.3s ease;
        }

        &:focus::-webkit-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus::-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-moz-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &:focus:-ms-input-placeholder {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    }

.mainBackgroundColor1 {background-color:#E5E5E5}

.mainBackgroundColor2 {background-color:#FFBC33}

@font-face {
    font-family: 'Montserrat300';
    src: local('Montserrat300'), local('Montserrat300'),
    url(${Montserrat300_2}) format('woff2'),
    url(${Montserrat300}) format('woff');
    font-weight: 300;
    font-style: normal;
},
@font-face {
    font-family: 'Montserrat600';
    src: local('Montserrat600'), local('Montserrat600'),
    url(${Montserrat600_2}) format('woff2'),
    url(${Montserrat600}) format('woff');
    font-weight: 600;
    font-style: normal;
},
@font-face {
    font-family: 'Montserrat800';
    src: local('Montserrat800'), local('Montserrat800'),
    url(${Montserrat800_2}) format('woff2'),
    url(${Montserrat800}) format('woff');
    font-weight: 800;
    font-style: normal;
},
@font-face {
    font-family: 'MontserratRegular';
    src: local('Montserrat800'), local('MontserratRegular'),
    url(${MontserratRegular_2}) format('woff2'),
    url(${MontserratRegular}) format('woff');
    font-weight: Regular;
    font-style: normal;
}
`;
const size = {
	mobile: '320px',
	tablet: '768px',
	desktop: '1280px',
};
export const device = {
	mobile: `(min-width: ${size.mobileS})`,
	tablet: `(min-width: ${size.tablet})`,
	desktop: `(min-width: ${size.desktop})`,
};

export default GlobalStyle;
