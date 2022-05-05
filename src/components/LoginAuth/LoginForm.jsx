import clsx from "clsx";
import React, { useEffect, useState } from "react";
import LoadingButton from "../Common/LoadingButton";
import { KEY_USER_INFO_CACHE } from "../Common/constants";
import styles from "./LoginForm.module.css";
import { useLoginUser } from "./LoginUtils";

export default function LoginForm(props) {
  const { setIsLoggedIn } = props;
  const { loginFetcher, isLoading, response } = useLoginUser();
  const [loginFailed, setLoginFailed] = useState(false);
  const [validForm, setValidForm] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();
    if (validForm && !loginFailed) {
      loginFetcher(e.target.email.value, e.target.password.value);
    } else {
      setLoginFailed(true);
    }
  };

  useEffect(() => {
    let timeOutId = null;
    if (loginFailed) {
      timeOutId = setTimeout(() => {
        setLoginFailed(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [loginFailed]);

  useEffect(() => {
    if (response.error) {
      setLoginFailed(true);
    }
  }, [response]);

  const emailValidator = (e) => {
    setValidForm(checkEmailValidity(e.target.value));
  };

  const onLoginSuccess = () => {
    localStorage.setItem(KEY_USER_INFO_CACHE, JSON.stringify(response.data));
    setIsLoggedIn(true);
  };
  return (
    <div className={clsx(styles.login_modal, styles.centerContainer)}>
      <h1>Login</h1>
      <form
        onSubmit={loginHandler}
        className={clsx(styles.form, loginFailed ? styles.animate : "")}
      >
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            onInput={emailValidator}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" minLength="4" />
        </div>
        <button type="submit">
          <LoadingButton
            loading={isLoading}
            loaded={response.error === false}
            onLoadCallback={onLoginSuccess}
          />
          {isLoading || response.error === false ? null : "Login"}
        </button>
        {response.error ? (
          <p className={styles.loginerror}>{response.message}</p>
        ) : null}
        {!validForm ? (
          <p className={styles.loginerror}>Enter a valid email please</p>
        ) : null}
      </form>
    </div>
  );
}

export const checkEmailValidity = (inputText) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
