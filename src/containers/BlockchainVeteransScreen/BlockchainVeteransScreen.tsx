import React from "react";

import LearnButton from "@/components/LearnButton";

import styles from "./BlockchainVeteransScreen.module.scss";

const BlockchainVeteransScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles["blockchain-veterans"]} ${active ? styles.active : ''}`}>
      <div className={styles["blockchain-veterans__description"]}>
        <h2 className={styles["screen-title"]} id="screen-title">
          <span>Neither traditional</span>
          <span>gaming giants nor</span>
          <span>Blockchain veterans</span>
          <span>will fill the gap</span>
        </h2>
        <div className={styles.divider}></div>
        <LearnButton />
      </div>
    </div>
  );
};

export default BlockchainVeteransScreen;
