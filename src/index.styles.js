import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  height:100%;
  @media(max-width: 767px){height:auto; min-height: 100%;}
  }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', 'Roboto', sans-serif;
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

          };
          

 /* notification */
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
     display: flex;
    align-items: center;
    justify-content: flex-start;
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
    color: #fff !important;
  }
  .notification-info .message {
    color: #fff;
  }
  
  .notification-info:before {
    /* content: url('./icon/info.svg'); */
  }
  
  .notification-success {
  }
  
  .notification-success .message {
    color: #fff;
  }
  
  .notification-success:before {
    /* content: url('./icon/success.svg'); */
  }
  
  .notification-warning {
   background-color: rgb(255, 0, 0);;
       color: red;
  }
  
  .notification-warning .message {
    color: #fff;
  }
  
  .notification-warning:before {
      margin-right:20px;
    content: url('https://storage.googleapis.com/kidslikev2_bucket/c47c195b35a614afaab96389fe91f4d7.svg');
  }
  
  .notification-error {
    color: #fff;
  }
  
  .notification-error .message {
    color: #fff;
  }
  
  .notification-error:before {
     }
  
  .notification-message {
    padding: 0;
  }
  
  .notification-message .message {
    background: transparent;
    background-color: transparent;
     }
     
  .grecaptcha-badge {
    display: none;
  }

`;
export const mainBackgroundColor1 = 'background-color:#FFBC33';

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
