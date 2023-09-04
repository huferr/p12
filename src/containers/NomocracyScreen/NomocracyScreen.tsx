import React from "react";

import styles from "./NomocracyScreen.module.scss";

const NomocracyScreen = ({ active }: { active: boolean }) => {
  return (
    <div className={`${styles.nomocracy} ${active ? styles.active : ""}`}>
      <div className={styles["nomocracy__description"]}>
        <div className={styles["nomocracy__text-content"]}>
          <div className={`${styles["text-block"]} ${styles["-trAnim-1"]}`}>
            <h4>
              Distribute by
              <br />
              usage statistics
            </h4>
            <ul>
              <li>Population Policy</li>
              <li>Proof of Play</li>
            </ul>
            <div className={`${styles.arrow} ${styles["-trAnim-2"]}`}>
              <svg
                width="130"
                height="116"
                viewBox="0 0 130 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_260_385)">
                  <path
                    d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z"
                    fill="var(--color-path-2)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_260_385"
                    x="0"
                    y="0"
                    width="129.975"
                    height="115.039"
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
                      result="effect1_dropShadow_260_385"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_260_385"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className={`${styles["text-block"]} ${styles["-trAnim-2"]}`}>
            <h4>
              Distribute by
              <br />
              economic activities
            </h4>
            <ul>
              <li>Turnover Tax</li>
              <li>GDP</li>
            </ul>
            <div className={`${styles.arrow} ${styles["-trAnim-3"]}`}>
              <svg
                width="130"
                height="116"
                viewBox="0 0 130 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_260_385)">
                  <path
                    d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z"
                    fill="var(--color-path-2)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_260_385"
                    x="0"
                    y="0"
                    width="129.975"
                    height="115.039"
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
                      result="effect1_dropShadow_260_385"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_260_385"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className={`${styles["text-block"]} ${styles["-trAnim-3"]}`}>
            <h4>
              Distribute by
              <br />
              Keynesian controls
            </h4>
            <ul>
              <li>Cold Start Impressions</li>
              <li>Non-profit Content</li>
              <li>Ad Unit</li>
            </ul>
            <div className={`${styles.arrow} ${styles["-trAnim-2"]}`}>
              <svg
                width="130"
                height="116"
                viewBox="0 0 130 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_260_385)">
                  <path
                    d="M84.9744 53.67L78.6422 58.4L59.9939 44.46L41.3321 58.4L35 53.67L59.9939 35L84.9744 53.67Z"
                    fill="var(--color-path-1)"
                  />
                  <path
                    d="M76.1251 65.3095L69.793 70.0394L59.9936 62.7094L50.1808 70.0394L43.8486 65.3095L59.9936 53.2495L76.1251 65.3095Z"
                    fill="var(--color-path-2)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_260_385"
                    x="0"
                    y="0"
                    width="129.975"
                    height="115.039"
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
                      result="effect1_dropShadow_260_385"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_260_385"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${styles.subtitle} ${styles['-trAnim-4']}`}>
          <p>Monetary Policy</p>
          <div className={styles.divider}></div>
          <p>Fiscal Policy</p>
        </div>
        <h2 className={`${styles['screen-title']} ${styles['-trAnim-5']}`} id="screen-title">nomocracy</h2>
      </div>
    </div>
  );
};

export default NomocracyScreen;
