import clsx from "clsx";
import React, { useEffect } from "react";
import styles from "./LoadingButton.module.css";
export default function LoadingButton(props) {
  const { loading, loaded, onLoadCallback } = props;

  useEffect(() => {
    let callBackTimerId = null;

    if (loaded) {
      callBackTimerId = setTimeout(() => {
        onLoadCallback();
      }, 800);
    }
    return () => {
      clearTimeout(callBackTimerId);
    };
  }, [loaded]);

  return loading || loaded ? (
    <div
      className={clsx(
        styles.loading_button,
        loaded ? styles.load_complete : ""
      )}
    >
      <div
        className={clsx(styles.checkmark, styles.draw)}
        style={loaded ? { display: "block" } : {}}
      ></div>
    </div>
  ) : null;
}
