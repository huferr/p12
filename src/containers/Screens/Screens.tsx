import React from "react";

import TokenEconomyScreen from "../TokenEconomyScreen";
import NomocracyScreen from "../NomocracyScreen";
import RoadmapScreen from "../RoadmapScreen";
import ArchitectureFirstScreen from "../ArchitectureFirstScreen";
import ArchitectureSecondScreen from "../ArchitectureSecondScreen";
import BlockchainVeteransScreen from "../BlockchainVeteransScreen";
import EconsScreen from "../EconsScreen/EconsScreen";
import EconsSolutionScreen from "../EconsSolutionsScreen";
import OrganicSustainableScreen from "../OrganicSustainableScreen";
import ProjectTwelveScreen from "../ProjectTwelveScreen";
import TechSolutionScreen from "../TechSolutionScreen";

import styles from "./Screens.module.scss";
interface Props {
  delayedActiveScreenNumber: number;
  scrollHeight: number;
}

const Screens = ({ delayedActiveScreenNumber, scrollHeight }: Props) => {
  const isPageActive = (activePageNumber: number) => {
    return delayedActiveScreenNumber === activePageNumber;
  };
  
  return (
    <div className={styles.screens}>
      <div
        className={styles["screens__flow-container"]}
        style={{ transform: `translate3d(0, ${scrollHeight}vh, 0)` }}
      >
        <ProjectTwelveScreen active={isPageActive(0)} />
        <OrganicSustainableScreen active={isPageActive(1)} />
        <EconsScreen active={isPageActive(2)} />
        <BlockchainVeteransScreen active={isPageActive(3)} />
        <ArchitectureFirstScreen active={isPageActive(4)} />
        <ArchitectureSecondScreen active={isPageActive(5)} />
        <TechSolutionScreen active={isPageActive(6)} />
        <EconsSolutionScreen active={isPageActive(7)} />
        <TokenEconomyScreen active={isPageActive(8)} />
        <NomocracyScreen active={isPageActive(9)} />
        <RoadmapScreen active={isPageActive(10)} />
      </div>
    </div>
  );
};

export default Screens;
