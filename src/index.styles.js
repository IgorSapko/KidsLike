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

import warning from './img/warning.svg';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', 'Roboto', sans-serif;
    }

    #root {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    body {
      &::-webkit-scrollbar {
        width: 12px;
      }

      &::-webkit-scrollbar-track {
        background: #dfe4ea;
      }

      &::-webkit-scrollbar-thumb {
        background: #FEC200;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #f39c12;
      }
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

.notification-enter {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  .notification-enter.notification-enter-active {
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  .notification-enter.notification-enter-active,
  .notification-leave {
    visibility: visible;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .notification-leave.notification-leave-active {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }
  
  /* //------------------- */
  .notification-container {
    box-sizing: border-box;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 999999;
    width: 100%;
    min-width: 300px;
    max-width: 360px;
    min-height: max-content;
    right: 10px;
    bottom: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  .notification {
    box-sizing: border-box;
    padding: 8px 10px 8px 10px;
    border-radius: 3px;
    background-color: #2b2f36;
    box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.11);
    cursor: pointer;
    font-size: 14px;
    line-height: 14px;
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* margin-right:155px; */
    opacity: 0.9;
  }
  
  .notification .title {
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    margin: 0 0 5px 0;
  }
  
  .notification:hover,
  .notification:focus {
    opacity: 1;
  }
  
  .notification-enter {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
  
  .notification-enter.notification-enter-active {
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }
  
  .notification-leave {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  
  .notification-leave.notification-leave-active {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
    transition: all 0.4s;
  }
  
  .notification:before {
    width: 28px;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
  
  .notification-info {
    /* background-color: #fff; */
    /* border: 1px dashed #777; */
  
    color: #fff !important;
  }
  .notification-info .message {
    color: #fff;
  }
  
  .notification-info:before {
    /* content: url('./icon/info.svg'); */
  }
  
  .notification-success {
    /* background-color: #000; */
    /* border: 1px dashed #000; */
  }
  
  .notification-success .message {
    color: #fff;
  }
  
  .notification-success:before {
    /* content: url('./icon/success.svg'); */
  }
  
  .notification-warning {
   background-color: rgb(255, 0, 0);;
    /*  border: 1px solid #777; */
    color: red;
  }
  
  .notification-warning .message {
    color: #fff;
  }
  
  .notification-warning:before {
      margin-right:20px;
    content: url(${warning});
  }
  
  .notification-error {
    /* border: 1px solid #777;
    background-color: #777; */
    color: #fff;
  }
  
  .notification-error .message {
    color: #fff;
  }
  
  .notification-error:before {
    /* content: url('./icon/error.svg'); */
  }
  
  .notification-message {
    padding: 0;
  }
  
  .notification-message .message {
    background: transparent;
    background-color: transparent;
    /* padding: 4px; */
  }
  .grecaptcha-badge {
    display: none;
  }




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

/* .mainBackgroundColor2 {background-color:#FFBC33} */

`;
export const size = {
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
