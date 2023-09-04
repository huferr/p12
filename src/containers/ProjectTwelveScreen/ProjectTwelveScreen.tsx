import React, { useEffect, useRef } from "react";

import DiscordIcon from "@/assets/icons/Discord";
import TelegramIcon from "@/assets/icons/Telegram";
import TwitterIcon from "@/assets/icons/Twitter";
import LearnButton from "@/components/LearnButton";

import { fluidSimulation } from "@/utils/fluidSimulation";

import styles from "./ProjectTwelveScreen.module.scss";

const ProjectTwelveScreen = ({ active }: { active: boolean }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    fluidSimulation(canvasRef.current);
  }, []);

  return (
    <div
      className={`${styles["project-twelve"]} ${active ? styles.active : ""}`}
    >
      <div className={styles["project-twelve__title"]}>
        <h1>
          <span>Project</span>
          <span>Twelve</span>
        </h1>
      </div>
      <div className={styles.divider}></div>
      <LearnButton />
      <div className={styles.social}>
        <div className={styles.twitter}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <TwitterIcon />
          </svg>
        </div>
        <div className={styles.telegram}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <TelegramIcon />
          </svg>
        </div>
        <div className={styles.discord}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <DiscordIcon />
          </svg>
        </div>
      </div>
      <div className={styles.message}>
        <div className={styles["vertical-divider"]}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <canvas
        ref={canvasRef}
        className={styles["project-twelve__background"]}
      ></canvas>
    </div>
  );
};

export default ProjectTwelveScreen;
