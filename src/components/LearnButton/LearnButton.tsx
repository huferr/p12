import React from "react";
import styles from "./LearnButton.module.scss";

const LearnButton = () => {
  return (
    <a className={`${styles.learnButton} ${styles.active}`} href="#">
      <span>Learn more</span>
      <span className={styles.icon}>
        <svg
          width="65"
          height="48"
          viewBox="0 0 65 48"
          fill="rgba(5, 0, 255, 0)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="17.5" y="0.5" width="47" height="47" stroke="#0500FF" />
          <path
            className="tip"
            d="M37.9299 17.9999L43.9999 24.0699L37.9299 30.1399"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
          <path
            className="cane"
            d="M1 24L43 24"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
};

export default LearnButton;
