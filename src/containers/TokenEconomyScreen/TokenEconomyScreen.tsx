import LearnButton from '@/components/LearnButton/LearnButton';
import React from 'react';
import styles from './TokenEconomyScreen.module.scss'

const TokenEconomyScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles["token-economy"]} ${active ? styles.active : ""}`}>
      <div className={styles["token-economy__description"]}>
        <p className={`${styles['screen-subtitle']} ${styles['-trAnim-1']}`}>Solution Econs</p>
        <h2 className={`${styles['screen-title']} ${styles['-trAnim-2']}`} id="screen-title">
          token
          <br />
          Ecomomy
        </h2>
        <p className={`${styles['text-block']} ${styles['-trAnim-3']}`}>
          There will be many planets and game worlds in the Metaverse, each with own gameplays, governance, and token economies. P12 is the top level token for the whole Metaverse
        </p>
        <div>

        <LearnButton />
        </div>
      </div>
      <div className={styles["token-economy__slider"]}>
        <div className={`${styles['token-economy__sliders']} ${styles['-trAnim-3']}`}>
          <div className={styles.slide}>
            <h4>P12 is profit-sharing token.</h4>
            <p className={styles.subtitle}>It symbolizes the ownership of a unit piece of the Metaverse, and benefits from the growth of GDP & taxation</p>
            <ul>
              <li>A percentage of taxation will be profit-shared with P12 starmakers</li>
              <li>For the portion of P12 that is not staked, the corresponding the amount of P12 that should be rewarded, will be burned instead (the deflation</li>
              <li>For the portion of P12 that is staked, profit share will materialize during withdrawal</li>
            </ul>
          </div>
        </div>
        <div className="stages -trAnim-4">
          <p>01</p>
          <div className="line"></div>
          <p>03</p>
        </div>
      </div>
    </div>
  );
};

export default TokenEconomyScreen;
