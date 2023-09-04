import React from "react";
import styles from "./ArchitectureFirstScreen.module.scss";
import classNames from "classnames";

const ArchitectureFirstScreen = ({ active }: { active: boolean }) => {
  const screenTitleClassName = classNames(
    styles["screen-title"],
    styles["-trAnim-2"]
  );

  const screenSubtitleClassName = classNames(
    styles["screen-subtitle"],
    styles["-trAnim-1"]
  );

  const citizensClassName = classNames(
    styles["citizens"],
    styles["-trAnim-3"]
  )

  const platformClassName = classNames(
    styles["platform"],
    styles["-trAnim-4"]
  )

  return (
    <div className={`${styles["architecture-first"]} ${active ? styles.active : ''}`}>
      <div className={styles["architecture-first__description"]}>
        <p className={screenSubtitleClassName} id="screen-subtitle">Solution</p>
        <h2 className={screenTitleClassName} id="screen-title">Architecture</h2>
      </div>
      <div className={styles["architecture-first__scheme"]}>
        <div className={citizensClassName}>
          <div className={styles["citizens__video"]}>
            <video
              autoPlay
              playsInline
              muted
              loop
              poster="/assets/images/plexus_poster.jpg"
            >
              <source src="/assets/videos/plexus.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles["citizens-title"]}>Citizens</div>
        </div>
        <div className={platformClassName}>
          <img src="/assets/images/platform.png" alt="platform" />
        </div>
        <div className={styles["orbits"]}>
          <div className={styles["orbit-1"]}></div>
          <div className={styles["orbit-2"]}>
            <div className={styles["glass-circle"]}>
              <div>e</div>
            </div>
            <div className={styles["glass-circle"]}>
              <div>r</div>
            </div>
          </div>
          <div className="orbit-3">
            <div className={styles["glass-circle"]}>
              <div>n</div>
            </div>
            <div className={styles["glass-circle"]}>
              <div>i</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureFirstScreen;
