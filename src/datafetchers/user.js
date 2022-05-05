import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const useGetUserApi = () => {
  const { siteConfig } = useDocusaurusContext();

  return async (token, onError, onSuccess) => {
    const response = await fetch(
      siteConfig.customFields.mainApiBaseURL + "/users/self",
      {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.error === true) {
      onError();
    } else {
      onSuccess();
    }
  };
};
