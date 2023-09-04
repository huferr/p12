import React from "react";
import styles from "./TechSolutionScreen.module.scss";

const TechSolutionScreen = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`${styles["tech-solution"]} ${active ? styles.active : ""}`}
    >
      <div className={styles["tech-solution__description"]}>
        <p className={`${styles["screen-subtitle"]} ${styles["-trAnim-1"]}`}>
          Solution
        </p>
        <h2 className={`${styles["screen-title"]} ${styles["-trAnim-2"]}`} id="screen-title">
          Tech
        </h2>
      </div>
      <div className={styles["tech-solution__scheme"]}>
        <div className={styles["tech-solution__canvas"]}>
          <div className={styles["processor-block"]}>
            <p className={`${styles.title} ${styles["-trAnim-4"]}`}>Editor</p>
            <img
              className={`${styles.processor} ${styles["-trAnim-3"]}`}
              src="/assets/images/processor.png"
              alt="processor"
            />
            <div
              className={`${styles["processor__arrow"]} ${styles["-trAnim-4"]}`}
            >
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_216_276)">
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_216_276"
                    x="0.947754"
                    y="0.947998"
                    width="130.112"
                    height="115.603"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_216_276"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_216_276"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              className={`${styles.processor__arrow} ${styles["-trAnim-5"]}`}
            >
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_220_281)">
                  <path
                    d="M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_220_281"
                    x="0.939453"
                    y="0.950012"
                    width="130.113"
                    height="115.1"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_220_281"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_220_281"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles["processor-block"]}>
            <p className={`${styles.title} ${styles["-trAnim-5"]}`}>Infra</p>
            <img
              className={`${styles.processor} ${styles["-trAnim-4"]}`}
              src="/assets/images/processor.png"
              alt="processor"
            />
            <div
              className={`${styles.processor__arrow} ${styles["-trAnim-5"]}`}
            >
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_216_276)">
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_216_276"
                    x="0.947754"
                    y="0.947998"
                    width="130.112"
                    height="115.603"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_216_276"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_216_276"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              className={`${styles.processor__arrow} ${styles["-trAnim-6"]}`}
            >
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_220_281)">
                  <path
                    d="M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M38.9762 71L40.7619 61.9483H74.6905L76.4762 40.8276H86L84.8095 71H38.9762Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M37.7857 45.6552L36 54.7069L65.1667 55.3103L66.9524 36H56.8333L55.0476 46.8621L37.7857 45.6552Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_220_281"
                    x="0.939453"
                    y="0.950012"
                    width="130.113"
                    height="115.1"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_220_281"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_220_281"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles["processor-block"]}>
            <p className={`${styles.title} ${styles["-trAnim-6"]}`}>planet</p>
            <img
              className={`${styles.processor} ${styles["-trAnim-5"]}`}
              src="/assets/images/processor-middle.png"
              alt="processor"
            />
            <img
              className={`${styles["processor-small"]} ${styles["-trAnim-6"]}`}
              src="/assets/images/processor-small.png"
              alt="processor"
            />
          </div>
          <div className={styles["processor-block"]}>
            <p className={`${styles.title} ${styles["-trAnim-7"]}`}>rountime</p>
            <img
              className={`${styles.processor} ${styles["-trAnim-6"]}`}
              src="/assets/images/processor-middle.png"
              alt="processor"
            />
            <img
              className={`${styles["processor-small"]} ${styles["-trAnim-7"]}`}
              src="/assets/images/processor-small.png"
              alt="processor"
            />
          </div>
          <div className={`${styles.reward} ${styles['-trAnim-8']}`}>
            <div className={styles["processor__arrow"]}>
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_216_276)">
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_216_276"
                    x="0.947754"
                    y="0.947998"
                    width="130.112"
                    height="115.603"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_216_276"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_216_276"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <p>Rewards & costs</p>
            <div className={styles["processor__arrow"]}>
              <svg
                width="132"
                height="117"
                viewBox="0 0 132 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_216_276)">
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    fill="var(--color-path-2)"
                  />
                  <path
                    d="M37.5 71.5L36 41.5L46 41L47.5 63L81.5 62.5L83 71L37.5 71.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                  <path
                    d="M57 55.5L54.5 36.5L65 36L67 47L84.5 46.5L86 54.5L57 55.5Z"
                    stroke="black"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_216_276"
                    x="0.947754"
                    y="0.947998"
                    width="130.112"
                    height="115.603"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_216_276"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_216_276"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <p className={`${styles.nomocracy} ${styles['-trAnim-7']}`}>Nomocracy</p>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionScreen;
