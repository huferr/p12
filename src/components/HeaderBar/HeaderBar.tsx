import MenuIcon from "@/assets/icons/Menu";
import React from "react";
import styles from "./HeaderBar.module.scss";

interface Props {
  isNavbarActive: boolean;
  openNavbar: (value: boolean) => void;
}

const HeaderBar = ({ isNavbarActive }: Props) => {
  const links = [
    { title: "Loream Impsum", href: "#" },
    { title: "Loream Impsum", href: "#" },
    { title: "Loream Impsum", href: "#" },
  ];

  const setOpacity = isNavbarActive ? 0 : 1;

  return (
    <div style={{ opacity: setOpacity }} className={styles.mainHeader}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <div className={styles.links}>
        {links.map((link, idx) => (
          <a key={idx} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
      <a href="#" className={styles.button}>
        Learn More
      </a>
      <div className={styles.buttonMenu}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default HeaderBar;
