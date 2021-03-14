import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { emailValid } from "../../../services/validationFront";
import notification from "../../../services/notification";
import authOperations from "../../../redux/auth/authOperations";
import { CSSTransition } from "react-transition-group";
import AlertAnimation from "./authanimation.styles.css";
// import selectors from '../../../redux/selectors';
import {
  Form,
  Input,
  Button,
  Label,
  P,
  ButtonContainer,
  ButtonGoogle,
  NotificationDiv,
  GoogleLink,
  NotificationDivEmail,
  AnimatedNotiicationEmail,
  AnimatedNotiicationPassword,
} from "./authForm.styles";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlertEmail, setValidEmail] = useState(false);
  const [isAlertPassword, setValidPassword] = useState(false);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectors.getIsLoading);
  // // state=>state.loader
  // console.log('isLoading', isLoading);

  const handleLogin = (event) => {
    handleSubmit(event);
  };

  const handleRegistr = (event) => {
    handleSubmit(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const credential = {
      email: email,
      password: password,
    };

    console.log("str54", emailValid(email), password.length >= 6);

    if (emailValid(email) && password.length >= 6) {
      if (event.target.id === "signup") {
        dispatch(authOperations.userSignUp(credential));
      } else if (event.target.id === "login") {
        dispatch(authOperations.userSignIn(credential));
      }
    } else if (!emailValid(email) && password.length < 6) {
      setValidEmail(true);
      setValidPassword(true);
    } else if (!emailValid(email)) {
      setValidEmail(true);
    } else if (password.length < 6) {
      setValidPassword(true);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <P>Вы можете авторизоваться с помощью Google Account:</P>
      <ButtonGoogle>
        <GoogleLink href="https://kids-like-backend-cloud.herokuapp.com/api/auth/google-auth">
          Google
        </GoogleLink>
      </ButtonGoogle>
      <P>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </P>
      <Label htmlFor="email">
        Email
        <Input
          type="text"
          placeholder="your@mail.com"
          id="email"
          value={email}
          onFocus={() => setValidEmail(false)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>

      <CSSTransition
        in={isAlertEmail}
        timeout={200}
        classNames={AlertAnimation}
        unmountOnExit
      >
        <AnimatedNotiicationEmail>
          это поле обязательное
        </AnimatedNotiicationEmail>
      </CSSTransition>

      <Label htmlFor="password">
        Password
        <Input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onFocus={() => setValidPassword(false)}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Label>

      <CSSTransition
        in={isAlertPassword}
        timeout={200}
        classNames={AlertAnimation}
        unmountOnExit
      >
        <AnimatedNotiicationPassword>
          это поле обязательное
        </AnimatedNotiicationPassword>
      </CSSTransition>

      <ButtonContainer>
        <Button onClick={handleLogin} id="login">
          Войти
        </Button>
        <Button onClick={handleRegistr} id="signup">
          Зарегистрироваться
        </Button>
      </ButtonContainer>
    </Form>
  );
};

export default AuthForm;
