import React from 'react';
import bones2 from "../images/cross-bones2.svg";
import styles from './Component3.module.css';

/*

Experimenting with using an SVG as an img src and CSS background-image. Handled gradient in the SVG file itself. Less flexibility that using the SVG tag explicitly, but will probably serve the majority of my use cases.

*/

export function Component3(props) {
    return (
        <div className={styles.Container}>
            Component 3
            <img src={bones2} alt=''></img>
            <img src={bones2} alt=''></img>
            End Component 3
        </div>

    )
}