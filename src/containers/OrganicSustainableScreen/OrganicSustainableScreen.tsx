import React from "react";

import LearnButton from "@/components/LearnButton";

import styles from './OrganicSustainableScreen.module.scss'

const OrganicSustainableScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles["organic-sustainable"]} ${active ? styles.active : ''}`}>
      <div className={styles["organic-sustainable__description"]}>
        <p className={styles["screen-subtitle"]} id="screen-subtitle">
          Building a gaming ecosystem that’s truly
        </p>
        <h2 className={styles["screen-title"]} id="screen-title">
          ORGANIC &amp;
          <br />
          SUSTAINABLE
        </h2>
        <div className={styles["text-block"]}>
          <p>Safeguard</p>
          <p>
            P12 token: a POS DAO designed to safeguard meritocracy in GameFi
          </p>
        </div>
        <LearnButton />
      </div>
      <div className={styles["organic-sustainable__magazine"]}>
        <div className={styles.row}>
          <div className={styles["row__text-content"]}>
            <h4>Safeguard</h4>
            <p>
              P12 token: a POS DAO designed to safeguard meritocracy in GameFi
            </p>
          </div>
          <img src="/assets/images/safeguard.png" alt="safeguard" />
        </div>
        <div className={styles.row}>
          <div className={styles["row__text-content"]}>
            <h4>Stability</h4>
            <p>
              Developers within P12 ecosystem are deprived ability to slash the
              game currency nor to manipulate the NFT market
            </p>
          </div>
          <img src="/assets/images/stability.png" alt="stability" />
        </div>
        <div className={styles.row}>
          <div className={styles["row__text-content"]}>
            <h4>Growth</h4>
            <p>
              Developers will only be rewarded from sustainable growth of their
              game &amp; game community
            </p>
          </div>
          <img src="/assets/images/growth.png" alt="growth" />
        </div>
      </div>
    </div>
  );
};

export default OrganicSustainableScreen;
