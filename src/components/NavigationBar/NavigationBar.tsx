/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import gsap from "gsap";

import classNames from "classnames";

import styles from "./NavigationBar.module.scss";
import TwitterIcon from "@/assets/icons/Twitter";
import TelegramIcon from "@/assets/icons/Telegram";
import DiscordIcon from "@/assets/icons/Discord";

const navButtons = [
  "Project 12",
  "Overview",
  "Econs",
  "Gap",
  "Architecture",
  "Architecture",
  "Tech",
  "Econs",
  "Token Economy",
  "Nomocracy",
  "Roadmap",
];

const navbarTimmingFunction = "ease.inOut";

const navbarAppearTime = 500;
const scrollingTime = 1000;
const adaptivePointSm = 576;

let navbarActiveScreenNumber = 0;

interface Props {
  activeScreenNumber: number;
  isNavbarActive: boolean;
  closeNavbar: (value: boolean) => void;
  openScreen: (screenNumber: number) => void;
}

const NavigationBar = ({
  activeScreenNumber,
  isNavbarActive,
  openScreen,
  closeNavbar,
}: Props) => {
  const [navbarTranslate, setNavbarTranslate] = useState(0);

  const navButtonRefs = useRef<Array<HTMLDivElement>>([]); // Create an array of refs

  useEffect(() => {
    animateNavbarTranslate();
    calcNavbarActiveScreenMobile();
  }, [activeScreenNumber]);

  useEffect(() => {
    setNavbarTranslate(calculateNavbarTranslate());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setNavbarTranslate(calculateNavbarTranslate());
  };

  const animateNavbarTranslate = () => {
    const newNavbarTranslate = calculateNavbarTranslate();
    const timeline = gsap.timeline();
    timeline.to(
      { y: navbarTranslate },
      {
        y: newNavbarTranslate,
        ease: navbarTimmingFunction,
        duration: scrollingTime / 1000,
        onUpdate: () => {
          setNavbarTranslate(timeline.getChildren()[0].targets()[0].y);
        },
        onComplete: () => {
          timeline.kill();
        },
      }
    );
  };

  const calculateNavbarTranslate = () => {
    const navbarButtonsStyle = [] as any;
    let newNavbarTranslate = 0;

    if (isMobileWidth()) return 0;

    navButtonRefs.current.forEach((buttonName: any) => {
      navbarButtonsStyle.push({
        height: Number(getComputedStyle(buttonName).width.replace("px", "")),
        marginLeft: parseInt(getComputedStyle(buttonName).marginLeft),
      });
    });

    const translatedNavbarButtonsStyle = navbarButtonsStyle.slice(
      0,
      activeScreenNumber
    );

    translatedNavbarButtonsStyle.forEach((button: any) => {
      newNavbarTranslate += button.height + button.marginLeft;
    });

    if (navbarButtonsStyle[activeScreenNumber]) {
      newNavbarTranslate += navbarButtonsStyle[activeScreenNumber].height;
    }

    return newNavbarTranslate;
  };

  const isMobileWidth = () => {
    if (typeof window === "undefined") return false;

    return window.innerWidth < adaptivePointSm;
  };

  const calcNavbarActiveScreenMobile = () => {
    if (
      window.innerWidth <= adaptivePointSm &&
      activeScreenNumber > 1 &&
      activeScreenNumber <= 9
    ) {
      navbarActiveScreenNumber = activeScreenNumber - 1;
    } else if (
      window.innerWidth <= adaptivePointSm &&
      activeScreenNumber > 9 &&
      activeScreenNumber <= 12
    ) {
      navbarActiveScreenNumber = activeScreenNumber - 2;
    } else if (
      window.innerWidth <= adaptivePointSm &&
      activeScreenNumber > 12
    ) {
      navbarActiveScreenNumber = activeScreenNumber - 3;
    } else {
      navbarActiveScreenNumber = activeScreenNumber;
    }
  };

  const setOpenScreenIdx = (idx: number) => {
    if (window.innerWidth <= adaptivePointSm && idx > 1 && idx < 9) {
      return idx + 1;
    }
    if (window.innerWidth <= adaptivePointSm && idx >= 9) {
      return idx + 2;
    }
    return idx;
  };

  const navigationBarClasses = classNames(styles["navigation-bar"], {
    [styles.active]: isNavbarActive,
  });

  const navButtonClasses = (idx: number) =>
    classNames(styles["nav-button"], {
      [styles.active]: navbarActiveScreenNumber === idx,
    });

  return (
    <nav className={navigationBarClasses}>
      <div className={styles["navigation-bar__offset-container"]}>
        <div
          className={styles["navigation-bar__flow-container"]}
          style={{ transform: `translate3d(${navbarTranslate}px, 0, 0)` }}
        >
          {isMobileWidth() && (
            <div className={styles.header}>
              <div className="logo">
                <img src="../assets/logo.png" alt="logo" />
              </div>
              <div onClick={() => closeNavbar(false)} className="close">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5 1.5L2 26"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 1.5L26.5 26"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          )}

          {navButtons.map((navButton, idx) => (
            <div
              onClick={() => openScreen(setOpenScreenIdx(idx))}
              key={idx}
              className={navButtonClasses(idx)}
              ref={(element) => {
                if (!element) return;

                navButtonRefs.current[idx] = element;
              }}
            >
              <span>{navButton}</span>
            </div>
          ))}

          {isMobileWidth() && (
            <div className={styles.footer}>
              <a href="#" className={styles.twitter}>
                <TwitterIcon />
              </a>
              <a href="#" className={styles.telegram}>
                <TelegramIcon />
              </a>
              <a href="#" className={styles.discord}>
                <DiscordIcon />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className={styles["navigation-bar__active"]}></div>
    </nav>
  );
};

export default NavigationBar;
