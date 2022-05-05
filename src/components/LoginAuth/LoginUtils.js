import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useState } from "react";

export const useLoginUser = () => {
  const { siteConfig } = useDocusaurusContext();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({});
  const loginFetcher = async (email, password) => {
    setIsLoading(true);
    const response = await fetch(
      siteConfig.customFields.mainApiBaseURL + "/users/login",
      {
        method: "POST", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          appKey: "trgt_admin",
          userName: email,
          password,
        }),
      }
    );
    const jsonData = await response.json();
    setIsLoading(false);
    setResponse(jsonData);
  };
  return { loginFetcher, isLoading, response };
};
