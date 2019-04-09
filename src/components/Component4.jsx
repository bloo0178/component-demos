import React from "react";
import styles from "./Component4.module.css";
import shape from '../images/shape.svg';

/*

Experiment using SVG background shapes/ shape dividers over a background image. Understand SVG scaling. Also experiment with adding opacity/ filters over background image. 

*/

export function Component4(props) {
  return (
    <div className={styles.container}>
    Component4
      <div className={styles.logo}>
      <img src={shape} width="100%" height="100%"></img>
      </div>
    </div>
  );
}
