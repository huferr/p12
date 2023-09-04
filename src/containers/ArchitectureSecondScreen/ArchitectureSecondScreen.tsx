import React from 'react';

import classNames from 'classnames';

import styles from './ArchitectureSecondScreen.module.scss';

const ArchitectureSecondScreen = ({ active }: { active: boolean }) => {

  const screenTitleClassName = classNames(
    styles["screen-title"],
    styles["-trAnim-2"]
  )

  const screenSubtitleClassName = classNames(
    styles["screen-subtitle"],
    styles["-trAnim-1"]
  )

  const gradientBlockClassName = classNames(
    styles["gradient-block"],
    styles["-trAnim-3"]
  )

  const glassBlockLightClassName = (animClassName: string) => classNames(
    styles["glass-block"],
    styles["block-light"],
    styles[animClassName]
  )

  const glassBlockDarkClassName = (animClassName: string) => classNames(
    styles["glass-block"],
    styles["block-dark"],
    styles[animClassName]
  )

  const glassBlockDarkSmallClassName = (animClassName: string) => classNames(
    styles["glass-block"],
    styles["block-dark"],
    styles["block-small"],
    styles[animClassName]
  )
  return (
    <div className={`${styles["architecture-second"]} ${active ? styles.active : ''}`}>
      <div className={styles["architecture-second__description"]}>
        <p className={screenSubtitleClassName} id="screen-subtitle">Solution</p>
        <h2 className={screenTitleClassName} id="screen-title">Architecture</h2>
        <div className={styles["architecture-second__scheme"]}>
          <div className={styles["architecture-second__flow-container"]}>
            <div className={gradientBlockClassName}>
              <img src="/assets/logo-dark.png" alt="logo" />
            </div>
            <div className={styles.column}>
              <div className={glassBlockLightClassName('-trAnim-4')}>Central<br />Banking</div>
              <div className={glassBlockLightClassName('-trAnim-5')}>Legislature</div>
              <div className={glassBlockLightClassName('-trAnim-6')}>Treasure &<br />Taxation</div>
              <img src="/assets/images/arrow.png" alt="arrow" className={styles.arrow} />
            </div>
            <div className={styles.column}>
              <div className={styles.row}>
                <div className={glassBlockDarkClassName('-trAnim-4')}>Planet 1</div>
                <div className={glassBlockDarkSmallClassName("-trAnim-5")}>SIDECHAIN</div>
              </div>
              <div className={styles.row}>
                <div className={glassBlockDarkClassName('-trAnim-5')}>Planet 2</div>
                <div className={glassBlockDarkSmallClassName("-trAnim-6")}>SIDECHAIN</div>
              </div>
              <div className={styles.row}>
                <div className={glassBlockDarkClassName('-trAnim-6')}>Planet 3</div>
                <div className={glassBlockDarkSmallClassName("-trAnim-7")}>SIDECHAIN</div>
              </div>
              <div className={styles.row}>
                <div className={glassBlockDarkClassName('-trAnim-7')}>Planet 4</div>
                <div className={glassBlockDarkSmallClassName("-trAnim-8")}>SIDECHAIN</div>
              </div>
              <div className={styles.row}>
                <div className={glassBlockDarkClassName('-trAnim-8')}>Planet 5</div>
                <div className={glassBlockDarkSmallClassName("-trAnim-9")}>SIDECHAIN</div>
              </div>
              <img src="/assets/images/arrow-2.png" alt="arrow" className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSecondScreen;
