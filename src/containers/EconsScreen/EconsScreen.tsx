import React from 'react';

import styles from './EconsScreen.module.scss'

const EconsScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles.econs} ${active ? styles.active : ''}`}>
      <div className={styles["econs__description"]}>
        <p className={styles["screen-subtitle"]} id="screen-subtitle">Economy</p>
        <h2 className={styles["screen-title"]} id="screen-title">Econs</h2>
        <div className={styles["text-block"]}>
          <p>Being a more immersive<br />and all-compassing virtual world.</p>
          <p>
            Metaverse is fated to have a full-fledged Economy system. With such economic elements, citizens of the Metaverse will not be trusting centralized commercial companies with their valuable assets. Even the biggest companies, including those holding self-righteous claims such as “Don’t Do Evil”, have a long history of manipulating, confiscating and discarding users’ assets; not to mention killing products.
          </p>
        </div>
        <div className={styles.stages}>
          <p>01</p>
          <div className={styles.line}></div>
          <p>03</p>
        </div>
      </div>
    </div>
  );
};

export default EconsScreen;
