import React from "react";

import styles from "./EconsSolutionsScreen.module.scss";

const EconsSolutionScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles["econs-solution"]} ${active ? styles.active : ""}`}>
      <div className={styles["econs-solution__description"]}>
        <p className={`${styles["screen-subtitle"]} ${styles["-trAnim-1"]}`} id="screen-subtitle">
          Solution
        </p>
        <h2 className={`${styles["screen-title"]} ${styles["-trAnim-2"]}`} id="screen-title">
          Econs
        </h2>
      </div>
      <div className={styles["econs-solution__content"]}>
        <div className={styles["text-block"]}>
          <h3 className={styles["-trAnim-3"]}>Nomocracy</h3>
          <p className={styles["-trAnim-4"]}>
            A Metaverse Economy Backbone. A complete set of technologies, tools,
            and services - for developers, players, and merchants alike
          </p>
        </div>
        <div className={styles.list}>
          <p className={styles["-trAnim-3"]}>
            Economies driven by player ownership, creating lasting trust
          </p>
          <p className={styles["-trAnim-4"]}>
            Open standard for virtual items on blockchain
          </p>
          <p className={styles["-trAnim-5"]}>
            Monetery and fiscal policies for game planets
          </p>
        </div>
      </div>
    </div>
  );
};

export default EconsSolutionScreen;
