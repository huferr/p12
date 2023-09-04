import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";

import Screens from "@/containers/Screens/Screens";

import NavigationBar from "@/components/NavigationBar";
import HeaderBar from "@/components/HeaderBar";
import FluidBall from "@/components/FluidBall";

import CustomScrollEvent from "@/utils/customScrollEvent";

import styles from "./index.module.scss";

const screensCount = 11;
const screenScrollTimingFunction = "power2.inOut";
const screenHeight = 100; // vh
const scrollingTime = 1000;
const mobileBreakpoint = 576;

let activeScreenNumber = 0;
let wheeling = false;
let durableScrollHeight = 0;
let scrollingScreen = false;

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [delayedActiveScreenNumber, setDelayedActiveScreenNumber] =
    useState(-1);

  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const enableFastScrollTimeoutRef = useRef<any>(null);
  const checkingWheelingTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const customScroll = new CustomScrollEvent();
    customScroll.mouseWheel();
    customScroll.touchMove();
    document.addEventListener("scroll", handleScroll);
    setDelayedActiveScreenNumber(0);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event: any) => {
    stopWheelingIfWheelEventStopped();
    const direction = event?.detail?.direction;
    const nextScreenNumber = activeScreenNumber - direction;

    if (scrollingScreen) return;
    if (wheeling) return;

    setScroll(nextScreenNumber);
  };

  const setScroll = (nextScreenNumber: number) => {
    console.log("---> scrolling!");
    if (!isEnableToScroll(nextScreenNumber)) return;

    wheeling = true;
    scrollingScreen = true;

    activeScreenNumber = nextScreenNumber;
    animateScrollHeight();

    setTimeout(() => {
      scrollingScreen = false;
      console.log("---> ready to scroll");
    }, scrollingTime);

    // delayed active screen for starting animation on the middle of timeline
    setTimeout(() => {
      if (
        window.innerWidth <= mobileBreakpoint &&
        activeScreenNumber > 1 &&
        activeScreenNumber <= 9
      ) {
        setDelayedActiveScreenNumber(activeScreenNumber - 1);
      } else if (
        window.innerWidth <= mobileBreakpoint &&
        activeScreenNumber > 9 &&
        activeScreenNumber <= 12
      ) {
        setDelayedActiveScreenNumber(activeScreenNumber - 2);
      } else if (
        window.innerWidth <= mobileBreakpoint &&
        activeScreenNumber > 12
      ) {
        setDelayedActiveScreenNumber(activeScreenNumber - 3);
      } else {
        setDelayedActiveScreenNumber(activeScreenNumber);
      }
    }, scrollingTime / 2);

    // if the previous scroll finished but the wheeling still going, may be some one scrolling without stopping, so i give him this opportunity)
    clearTimeout(enableFastScrollTimeoutRef.current);
    enableFastScrollTimeoutRef.current = setTimeout(() => {
      clearTimeout(checkingWheelingTimeoutRef.current);
      wheeling = false;
    }, scrollingTime + 1200);
  };

  const isEnableToScroll = (nextScreenNumber: number) => {
    if (window.innerWidth <= mobileBreakpoint) {
      return nextScreenNumber >= 0 && nextScreenNumber < screensCount + 3;
    }
    return nextScreenNumber >= 0 && nextScreenNumber < screensCount;
  };

  const stopWheelingIfWheelEventStopped = () => {
    // i check if user stopped wheeling, it fixes bug when u r not scrolling but the wheeling event is still working
    if (wheeling) {
      clearTimeout(checkingWheelingTimeoutRef.current);
      checkingWheelingTimeoutRef.current = setTimeout(() => {
        wheeling = false;
      }, 300);
    }
  };

  const animateScrollHeight = () => {
    const timeline = gsap.timeline();

    timeline.to(
      { y: durableScrollHeight },
      {
        y: newScrollHeight(),
        ease: screenScrollTimingFunction,
        duration: scrollingTime / 1000,
        onUpdate: () => {
          durableScrollHeight = timeline.getChildren()[0].targets()[0].y;
          setScrollHeight(timeline.getChildren()[0].targets()[0].y);
        },
        onComplete: () => {
          timeline.kill();
        },
      }
    );
  };

  const newScrollHeight = () => {
    return screenHeight * activeScreenNumber * -1;
  };

  const openScreen = (pageIdx: number) => {
    if (pageIdx === activeScreenNumber) return;
    setScroll(pageIdx);
  };

  return (
    <div className={styles.main}>
      <Head>
        <base href={process.env.NEXT_PUBLIC_GH_URL} />
      </Head>
      <Screens
        delayedActiveScreenNumber={delayedActiveScreenNumber}
        scrollHeight={scrollHeight}
      />
      <NavigationBar
        openScreen={openScreen}
        closeNavbar={(value) => setIsNavbarActive(value)}
        activeScreenNumber={activeScreenNumber}
        isNavbarActive={isNavbarActive}
      />
      <HeaderBar
        openNavbar={(value) => setIsNavbarActive(value)}
        isNavbarActive={isNavbarActive}
      />
      <FluidBall activeScreenNumber={activeScreenNumber} />
    </div>
  );
};

export default App;
