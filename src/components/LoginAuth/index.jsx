import React from "react";
import AppCustomHeader from "../AppCustomHeader.jsx";
import LoginForm from "./LoginForm.jsx";

export default function LoginAuth(props) {
  const { setIsLoggedIn } = props;
  return (
    <>
      <AppCustomHeader />
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}
