import React, { useState, useEffect } from "react";
import styles from './FluidBallStyles.module.scss'

interface Props {
  activeScreenNumber: number;
}

const FluidBall = ({ activeScreenNumber }: Props) => {
  const [ballFirst, setBallFirst] = useState({
    trX: 0,
    trY: 0,
    scale: 1,
    index: 0,
  });
  const [ballSecond, setBallSecond] = useState({
    trX: 0,
    trY: 0,
    scale: 0,
    index: 1,
  });
  const [ballThird, setBallThird] = useState({
    trX: 0,
    trY: 0,
    scale: 0,
    index: 1,
  });

  useEffect(() => {
    ballsTranslate();
  }, [activeScreenNumber]);

  const setLayerIndex = () => {
    return activeScreenNumber > 2 ? -1 : 1;
  };

  const ballsTranslate = () => {
    if (window.innerWidth < 576) {
      setBallsPosition(0, 0, 0, 1, 0, -25, 10, 0, 1, -25, 10, 0, 0);
      setTimeout(() => {
        setBallsPosition(0, 0, 0, 1, 0, -25, 10, 0.3, 1, -25, 10, 0, 0);
      }, 1100);

      setBallsPosition(1, 0, -200, 1, 0, -73, -8, 1, 1, -25, 10, 0, 0);
      setBallsPosition(2, 0, -200, 0, 0, 0, 45, 1, 1, -25, 10, 0, 0);
      setBallsPosition(3, 0, -200, 0, 0, 0, -60, 1.2, 1, -25, 10, 0, 0);

      setBallsPosition(4, -25, 10, 0, 0, 0, -15, 1.4, 0, -25, 5, 0, 1);
      setTimeout(() => {
        setBallsPosition(4, -25, 10, 0, 0, 0, -15, 1.4, 0, -25, 5, 0.3, 1);
      }, 1100);

      setBallsPosition(5, -25, 10, 0, 0, 0, -200, 1, 0, 0, -65, 1.2, 1);

      setBallsPosition(6, -25, 5, 0, 1, 0, -200, 0, 0, 0, -15, 1.4, 0);
      setTimeout(() => {
        setBallsPosition(6, -25, 5, 0.3, 1, 0, -200, 0, 0, 0, -15, 1.4, 0);
      }, 1100);

      setBallsPosition(7, 0, -65, 1.2, 1, -15, 25, 0, 0, 0, -200, 1, 0);
      setBallsPosition(8, 25, -45, 1, 1, -15, 25, 0, 0, 0, -200, 0, 0);
      setBallsPosition(9, 30, -50, 1.4, 1, -15, 25, 0, 0, -15, 25, 0, 0);

      setBallsPosition(10, 30, -10, 2.2, 0, -10, 22, 0, 1, -15, 25, 0, 0);
      setTimeout(() => {
        setBallsPosition(10, 30, -10, 2.2, 0, -10, 22, 0.3, 1, -15, 25, 0, 0);
      }, 1100);

      setBallsPosition(11, 0, -200, 2.2, 0, 0, -65, 1.2, 1, -15, 25, 0, 0);
      setBallsPosition(12, 0, -200, 0, 0, 30, -55, 1.4, 1, -15, 25, 0, 0);
      setBallsPosition(13, -15, 25, 0, 0, 0, 40, 2, 1, -15, 25, 0, 0);

      return;
    }

    setBallsPosition(0, 0, 0, 1, 0, -15, 25, 0, 1, -15, 25, 0, 0);
    setTimeout(() => {
      setBallsPosition(0, 0, 0, 1, 0, -15, 25, 0.3, 1, -15, 25, 0, 0);
    }, 1100);

    setBallsPosition(1, 0, -200, 1, 0, -70, 0, 1, 1, -15, 25, 0, 0);
    setBallsPosition(2, 0, -200, 0, 0, 30, 0, 1.2, 1, -15, 25, 0, 0);
    setBallsPosition(3, -15, 25, 0, 0, 0, 0, 1.2, 0, -15, 25, 0, 1);
    setTimeout(() => {
      setBallsPosition(3, -15, 25, 0, 0, 0, 0, 1.2, 0, -15, 25, 0.3, 1);
    }, 1100);

    setBallsPosition(4, -15, 25, 0, 0, 0, -200, 1, 0, -70, 0, 1, 1);
    setBallsPosition(5, -15, 25, 0, 1, 0, -200, 0, 0, 0, 0, 1, 0);
    setTimeout(() => {
      setBallsPosition(5, -15, 25, 0.3, 1, 0, -200, 0, 0, 0, 0, 1, 0);
    }, 1100);

    setBallsPosition(6, -70, 0, 1, 1, -15, 25, 0, 0, 0, -200, 1, 0);
    setBallsPosition(7, -70, 0, 1, 1, -15, 25, 0, 0, 0, -200, 0, 0);
    setBallsPosition(8, 5, 0, 0.8, 1, -15, 25, 0, 0, -15, 25, 0, 0);

    setBallsPosition(9, 0, 0, 1.2, 0, -15, 25, 0, 1, -15, 25, 0, 0);
    setTimeout(() => {
      setBallsPosition(9, 0, 0, 1.2, 0, -15, 25, 0.3, 1, -15, 25, 0, 0);
    }, 1100);

    setBallsPosition(10, 0, -200, 1, 0, -70, 0, 1, 1, -15, 25, 0, 0);
  };

  const setBallsPosition = (
    idx: number,
    trX: number,
    trY: number,
    scale: number,
    index: number,
    trX2: number,
    trY2: number,
    scale2: number,
    index2: number,
    trX3: number,
    trY3: number,
    scale3: number,
    index3: number
  ) => {
    if (activeScreenNumber === idx) {
      setBallFirst({ trX, trY, scale, index });
      setBallSecond({ trX: trX2, trY: trY2, scale: scale2, index: index2 });
      setBallThird({ trX: trX3, trY: trY3, scale: scale3, index: index3 });
    }
  };

  return (
    <div
      style={{
        zIndex: setLayerIndex(),
      }}
      className={styles.container}
    >
      <div
        className={styles.fluidBall}
        style={{
          zIndex: ballFirst.index,
          transform: `translate3d(${ballFirst.trX}vw, ${ballFirst.trY}vh, 0) scale(${ballFirst.scale})`,
        }}
      >
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="/assets/images/fluidBall_poster.jpg"
        >
          <source src="/assets/videos/fluidBall.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={styles.fluidBall}
        style={{
          zIndex: ballSecond.index,
          transform: `translate3d(${ballSecond.trX}vw, ${ballSecond.trY}vh, 0) scale(${ballSecond.scale})`,
        }}
      >
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="/assets/images/fluidBall_poster.jpg"
        >
          <source src="/assets/videos/fluidBall.mp4" type="video/mp4" />
        </video>
      </div>
      <div
       className={styles.fluidBall}
        style={{
          zIndex: ballThird.index,
          transform: `translate3d(${ballThird.trX}vw, ${ballThird.trY}vh, 0) scale(${ballThird.scale})`,
        }}
      >
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="/assets/images/fluidBall_poster.jpg"
        >
          <source src="/assets/videos/fluidBall.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FluidBall;
