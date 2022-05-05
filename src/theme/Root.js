import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";
import LoginAuth from "../components/LoginAuth";
import {
  KEY_USER_INFO_CACHE,
  PROTECTED_PATH,
  USER_SESSION_CACHE,
} from "../components/Common/constants";
import { useGetUserApi } from "../datafetchers/user";

export default function Root({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();
  const userApiFetcher = useGetUserApi();

  useLayoutEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem(KEY_USER_INFO_CACHE));
    const freshUser = sessionStorage.getItem(USER_SESSION_CACHE);
    if (location.pathname.toLowerCase().includes(PROTECTED_PATH)) {
      if (freshUser) {
        setIsLoggedIn(true);
      } else if (userInfo) {
        userApiFetcher(
          userInfo?.token,
          () => setIsLoggedIn(false),
          () => {
            setIsLoggedIn(true);
            sessionStorage.setItem(USER_SESSION_CACHE, true);
          }
        );
      } else {
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(true);
    }
  }, [location.pathname]);

  return (
    <>{isLoggedIn ? children : <LoginAuth setIsLoggedIn={setIsLoggedIn} />}</>
  );
}
